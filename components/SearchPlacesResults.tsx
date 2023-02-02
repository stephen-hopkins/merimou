import React, {useMemo, useState} from 'react';
import styles from "@/styles/SearchPlacesResults.module.css";
import {getGeocode, getLatLng} from "use-places-autocomplete";
import {useAppDispatch} from "@/redux/hooks";
import {Button} from "primereact/button";
import {createPlace} from "@/lib/PlaceMappings";
import AddPlace from "@/components/AddPlace";
import {addPlace} from "@/redux/placeListsSlice";
import Link from "next/link";

export type SearchPlacesResultsProps = {
  searchResults: SearchResult[],
}

type SearchResult = {
  structured_formatting: Pick<google.maps.places.StructuredFormatting, 'main_text' | 'secondary_text'>,
} & Pick<google.maps.places.AutocompletePrediction, 'place_id' | 'description'>

function SearchPlacesResults({searchResults}: SearchPlacesResultsProps) {

  const [selectedPlace, setSelectedPlace] = useState(null as SearchResult | null);
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [showAddPlace, setShowAddPlace] = useState(false);
  const dispatch = useAppDispatch();

  const displayResults = useMemo(() => {
    if (selectedPlace) {
      return searchResults.filter(sr => sr.place_id === selectedPlace.place_id);
    }
    return searchResults;
  }, [selectedPlace, searchResults]);

  const savePlace = async () => {
    const results = await getGeocode({placeId: selectedPlace!.place_id});
    const location = getLatLng(results[0]);
    const place = createPlace(name, desc, selectedPlace!.place_id,
      location.lat, location.lng, selectedPlace!.structured_formatting.secondary_text)
    dispatch(addPlace(place));
    cancel();
  }

  const cancel = () => {
    setSelectedPlace(null);
    setShowAddPlace(false);
  }

  const onSelectPlace = (pl: SearchResult) => {
    setSelectedPlace(pl);
    setName(pl.structured_formatting.main_text)
    setDesc(pl.description);
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.results}>{
        displayResults.map(dr => (
          <li key={dr.place_id}>
            <Link className={styles.result}
                  onClick={() => onSelectPlace(dr)} href={{query: {focus: dr.place_id}}}
            >
              <strong>{dr.structured_formatting.main_text}</strong>
              <small>{dr.structured_formatting.secondary_text}</small>
            </Link>
          </li>
        ))}
        {
          selectedPlace &&
            <div className={styles.confirm}>
                <Button label="Add" onClick={() => setShowAddPlace(true)} className="p-button-success p-button-text"/>
                <Button label="Reset" onClick={() => setSelectedPlace(null)}
                        className="p-button-warning p-button-text"/>
            </div>
        }
      </ul>
      <AddPlace show={showAddPlace} name={name} setName={setName}
                description={desc}
                setDescription={setDesc} save={savePlace} cancel={cancel}/>

    </div>

  );
}

export default SearchPlacesResults;