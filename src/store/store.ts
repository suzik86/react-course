import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";
import currentPageItems from "./current-page/currentPageSlice";
import selectedBooks from "./selected-books/selectedBooksSlice";
import selectedItemDetails from "./selected-item-details/selectedItemDetailsSlice";

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
