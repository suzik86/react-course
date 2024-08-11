import { RootState } from "../store";

export const selectSelectedItemsDetails = (state: RootState) =>
  state.selectedItemDetails.details;
