import { createSlice } from "@reduxjs/toolkit";
import { getColumn, postColumn } from "../thunks/columnsThunk";

export const columSlice = createSlice({
  name: "colum",
  initialState: {
    value: "",
    title: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postColumn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.title.push(action.payload);
      })
      .addCase(postColumn.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getColumn.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getColumn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.title = action.payload;
      })
      .addCase(getColumn.rejected, (state, action) => {
        state.isLoading  = false;
        state.error = action.payload;
      });
  },
});
export default columSlice.reducer;
