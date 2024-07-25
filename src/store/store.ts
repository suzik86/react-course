import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { api } from "../services/ApiService";
import currentPageItemsReducer from "./slices/currentPageSlice";
import selectedBooksReducer from "./slices/selectedBooksSlice";
import selectedItemDetailsReducer from "./slices/selectedItemDetailsSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    selectedBooks: selectedBooksReducer,
    currentPageItems: currentPageItemsReducer,
    selectedItemDetails: selectedItemDetailsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
