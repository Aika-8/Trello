import { createSlice } from "@reduxjs/toolkit";
import { postSignUp } from "../thunks/authThunk";

export const authSlice = createSlice({
  name: "signUp",
  initialState: {
    userData: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postSignUp.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(postSignUp.fulfilled, (state, action) => {
        state.userData.push(action.payload);
      })
      .addCase(postSignUp.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});
export default authSlice.reducer;
