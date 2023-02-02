import React from 'react';
import {InputText} from "primereact/inputtext";
import usePlacesAutocomplete from 'use-places-autocomplete';
import SearchPlacesResults from "@/components/SearchPlacesResults";

function SearchPlaces() {

  const {
    value,
    setValue,
    suggestions: {status, data},
  } = usePlacesAutocomplete({debounce: 300});

  return (
    <div>
      <InputText placeholder="Search places" value={value} onChange={e => setValue(e.target.value)}/>
      {status === 'OK' && <SearchPlacesResults searchResults={data} />}
    </div>

  );
}

export default SearchPlaces;