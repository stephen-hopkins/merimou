import React from 'react';
import {GoogleMap} from "@react-google-maps/api";

const defaultCenter = { lat: 27.672932021393862, lng: 85.31184012689732 };
const defaultOptions = {
  disableDefaultUI: true,
  clickableIcons: true,
  scrollwheel: false,
}



function MapDisplay() {
  return (
    <GoogleMap options={defaultOptions} zoom={14} center={defaultCenter} mapTypeId={google.maps.MapTypeId.ROADMAP}
               mapContainerStyle={{width:'800px', height: '800px'}} />
  );
}

export default MapDisplay;