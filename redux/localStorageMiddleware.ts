import {createListenerMiddleware, isAnyOf} from "@reduxjs/toolkit";
import {addList, addPlace, PlaceListsState, removeList, removePlace} from "@/redux/placeListsSlice";
import {RootState} from "@/redux/store";
import {createPlaceList} from "@/lib/PlaceMappings";

const storageKey = "placeLists";

const localStorageMiddleware = createListenerMiddleware();
localStorageMiddleware.startListening({
  matcher: isAnyOf(addList, removeList, addPlace, removePlace),
  effect: (action, listenerApi) => {
    if (typeof window !== "undefined") {
      const item = JSON.stringify((listenerApi.getState() as RootState).placeLists)
      localStorage.setItem("placeLists", item);
    }
  }
})

export const reHydrateStore = () => {
  const fromStorage = typeof window !== "undefined" ? localStorage.getItem(storageKey) : null;
  const placeLists = (fromStorage ? JSON.parse(fromStorage) : createDefaultPlaceLists()) as PlaceListsState
  console.log('rehybdration store');
  console.log(placeLists);
  return {
    mapFocus: null as google.maps.LatLngLiteral | null,
    placeLists
  };
}

export function createDefaultPlaceLists() {
  return {
    value: [createPlaceList('Default', "Default list")],
    selectedIndex: 0
  } as PlaceListsState;
}

export default localStorageMiddleware;
