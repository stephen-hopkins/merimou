import React, {useEffect, useState} from 'react';
import {GoogleMap, MarkerF} from "@react-google-maps/api";
import {useAppSelector} from "@/redux/hooks";
import {currentPlacesSelector} from "@/redux/placeListsSlice";
import {useRouter} from "next/router";
import {getGeocode, getLatLng} from "use-places-autocomplete";

const defaultCenter = { lat: 27.672932021393862, lng: 85.31184012689732 };
const defaultOptions = {
  disableDefaultUI: true,
  clickableIcons: true,
}

type Coord = typeof defaultCenter;

function MapDisplay() {

  const {query} = useRouter();
  const [focus, setFocus] = useState(null as Coord | null);
  useEffect(() => {
    if (query.focus) {
      getGeocode({placeId: query.focus as string}).then(res => {
        const loc = getLatLng(res[0]);
        setFocus(loc);
      })
    }
  }, [query.focus]);

  const currentPlaces = useAppSelector(currentPlacesSelector);
  const mapCenter = focus ? focus : defaultCenter

  return (
    <GoogleMap options={defaultOptions} zoom={14} center={mapCenter} mapTypeId={google.maps.MapTypeId.ROADMAP}
               mapContainerStyle={{width:'100%', height: '100%'}} >
      {focus && <MarkerF key="focus" position={focus} />}
      {currentPlaces && currentPlaces.places.map(p => <MarkerF key={p.placeId} position={{lat: p.lat, lng: p.lng}} />)}
    </GoogleMap>
  );
}

export default MapDisplay;