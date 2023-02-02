import {createSlice, PayloadAction, current} from "@reduxjs/toolkit";
import Place from "@/models/Place";
import PlaceList from "@/models/PlaceList";
import {RootState} from "@/redux/store";

export const defaultPlaceLists = {
  value: [] as PlaceList[],
  selectedIndex: 0
}

export type PlaceListsState = typeof defaultPlaceLists;

const placeListsSlice = createSlice({
  name: 'placeLists',
  initialState: defaultPlaceLists,
  reducers: {
    addList: (state, action: PayloadAction<PlaceList>) => {
      state.value.push(action.payload);
    },
    removeList: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter(pl => pl.id !== action.payload)
    },
    addPlace: (state, action: PayloadAction<Place>) => {
      console.log(current(state));
      let list = state.value[state.selectedIndex];
      list.places.push(action.payload);
    },
    removePlace: (state, action: PayloadAction<string>) => {
      const list = state.value[state.selectedIndex];
      if (list) {
        list.places = list.places.filter(p => p.id !== action.payload)
      }
    }
  }
})

export const currentPlacesSelector = (state: RootState) => {
  console.log(state);
  return state.placeLists.value[state.placeLists.selectedIndex];
}

export const {addList, removeList, addPlace, removePlace} = placeListsSlice.actions

export default placeListsSlice;