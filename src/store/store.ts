import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "../services/ApiService";
import currentPageItemsReducer from "./slices/currentPageSlice";
import selectedBooksReducer from "./slices/selectedBooksSlice";
import selectedItemDetailsReducer from "./slices/selectedItemDetailsSlice";

const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  selectedBooks: selectedBooksReducer,
  currentPageItems: currentPageItemsReducer,
  selectedItemDetails: selectedItemDetailsReducer,
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
