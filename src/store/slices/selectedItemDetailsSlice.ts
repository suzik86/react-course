import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IBookDetails } from "../../interfaces";

export interface SelectedItemDetailsState {
  details: IBookDetails;
}
const initialState: SelectedItemDetailsState = {
  details: {} as IBookDetails,
};

export const selectedItemDetailsSlice = createSlice({
  name: "selectedItemDetails",
  initialState: initialState,
  reducers: {
    selectedItemDetails: (state, action: PayloadAction<IBookDetails>) => {
      state.details = action.payload;
    },
  },
});

export const { selectedItemDetails } = selectedItemDetailsSlice.actions;
export default selectedItemDetailsSlice.reducer;
