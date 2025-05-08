import { createSlice } from "@reduxjs/toolkit";
import { getCards, postCards } from "../thunks/cardsThunk";

export const cardSlice = createSlice({
  name: "addingCard",
  initialState: {
    value: "",
    addingCard: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postCards.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addingCard.push(action.payload);
      })
      .addCase(postCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCards.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getCards.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addingCard = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default cardSlice.reducer;