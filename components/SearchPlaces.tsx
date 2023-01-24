import React from 'react';
import {InputText} from "primereact/inputtext";
import usePlacesAutocomplete from 'use-places-autocomplete';

function SearchPlaces() {

  const {value, setValue} = usePlacesAutocomplete({debounce: 300});

  return (
    <InputText placeholder="Search places" value={value} onChange={e => setValue(e.target.value)}/>
  );
}

export default SearchPlaces;