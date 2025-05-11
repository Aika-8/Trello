import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCard,
  getCards,
  postCards,
  updateCard,
} from "../thunks/cardsThunk";

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
        state.error = null;
        state.addingCard = action.payload;
      })
      .addCase(getCards.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(updateCard.fulfilled, (state, action) => {
        state.isLoading = false;
        console.log("Updated card:", action.payload);
        const updatedCard = action.payload;
        const finded = state.addingCard.findIndex(
          (card) => card.id === updatedCard.id
        );
        if (finded !== -1) {
          state.addingCard[finded] = updatedCard;
        }
      })
      .addCase(updateCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteCard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteCard.fulfilled, (state, action) => {
        state.isLoading = false;
        state.addingCard = state.addingCard.filter(
          (card) => card.id !== action.payload
        );
      })
      .addCase(deleteCard.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default cardSlice.reducer;
