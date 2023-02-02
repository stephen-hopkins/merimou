import {Provider} from "react-redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";
import {PlaceListsState} from "@/redux/placeListsSlice";
import {ReactNode} from "react";

const Mockstore = ({ placeListState, children }: {placeListState: PlaceListsState, children: ReactNode}) => (
  <Provider
    store={configureStore({
      reducer: {
        placeLists: createSlice({
          name: 'placeLists',
          initialState: placeListState,
          reducers: {
            addPlace: () => {}
          },
        }).reducer,
      },
    })}
  >
    {children}
  </Provider>
);

export default Mockstore;