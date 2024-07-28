import { RootState } from "../store";

export const selectSelectedBooks = (state: RootState) =>
  state.selectedBooks.selectedBooks;
