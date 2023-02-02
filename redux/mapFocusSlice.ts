import {createSlice} from "@reduxjs/toolkit";
import {RootState} from "@/redux/store";

const mapFocusSlice = createSlice({
  name: 'mapFocus',
  initialState: null as google.maps.LatLngLiteral | null,
  reducers: {
    set: (state, action) => {
      return action.payload
    },
    clear: (state) => {
      state  = null
    }
  }
})

export const mapFocusSelector = (state: RootState) => {
  console.log(state);
  return state.mapFocus;
}

export const {set, clear} = mapFocusSlice.actions;

export default mapFocusSlice;