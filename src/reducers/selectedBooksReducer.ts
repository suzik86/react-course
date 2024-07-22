import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBook } from "../interfaces";

export interface SelectedBookInitialState {
  selectedBooks: IBook[];
}
const initialState: SelectedBookInitialState = {
  selectedBooks: [],
};

export const selectedBooksSlice = createSlice({
  name: "selectedBook",
  initialState: initialState,
  reducers: {
    selectBook: (state, action: PayloadAction<IBook>) => {
      state.selectedBooks = [...state.selectedBooks, action.payload];
    },
    unselectBook: (state, action: PayloadAction<IBook>) => {
      state.selectedBooks = state.selectedBooks.filter(
        (book) => book.uid !== action.payload.uid,
      );
    },
    unselectAllBooks: (state) => {
      state.selectedBooks = [];
    },
  },
});

export const { selectBook, unselectBook, unselectAllBooks } =
  selectedBooksSlice.actions;
export default selectedBooksSlice.reducer;
