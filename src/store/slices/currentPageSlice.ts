import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../../interfaces";

export interface CurrentPageItemsInitialState {
  currentPageItems: IBook[];
}
const initialState: CurrentPageItemsInitialState = {
  currentPageItems: [],
};

export const currentPageItemsSlice = createSlice({
  name: "currentPageItems",
  initialState: initialState,
  reducers: {
    currentPageItems: (state, action: PayloadAction<IBook[]>) => {
      state.currentPageItems = action.payload;
    },
  },
});

export const { currentPageItems } = currentPageItemsSlice.actions;
export default currentPageItemsSlice.reducer;
