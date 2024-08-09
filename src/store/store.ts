import { combineReducers, configureStore } from "@reduxjs/toolkit";
import currentPageItems from "./current-page/currentPageSlice";
import selectedBooks from "./selected-books/selectedBooksSlice";
import selectedItemDetails from "./selected-item-details/selectedItemDetailsSlice";

const rootReducer = combineReducers({  
  selectedBooks,
  currentPageItems,
  selectedItemDetails,
});

export function setupStore(preloadedState?: Partial<RootState>) {
  return configureStore({
    reducer: rootReducer,    
    preloadedState,
  });
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
