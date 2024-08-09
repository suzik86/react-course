import { RootState } from "../store";

export const selectCurrentPageItems = (state: RootState) =>
  state.currentPageItems.currentPageItems;
