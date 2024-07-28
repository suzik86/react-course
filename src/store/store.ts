import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";
import currentPageItems from "./slices/currentPageSlice";
import selectedBooks from "./slices/selectedBooksSlice";
import selectedItemDetails from "./slices/selectedItemDetailsSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  selectedBooks,
  currentPageItems,
  selectedItemDetails,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(api.middleware),
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
