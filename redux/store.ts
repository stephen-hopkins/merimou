import { configureStore } from '@reduxjs/toolkit';
import mapFocusReducer from './mapFocusSlice';
import placeListsSlice from "@/redux/placeListsSlice";
import localStorageMiddleware, {reHydrateStore} from "@/redux/localStorageMiddleware";

const store = configureStore({
  reducer: {
    mapFocus: mapFocusReducer.reducer,
    placeLists: placeListsSlice.reducer
  },
  preloadedState: reHydrateStore(),
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(localStorageMiddleware.middleware)
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;