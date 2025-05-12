import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const postSignUp = createAsyncThunk(
  "signUp/postSignUp",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/register", userData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
