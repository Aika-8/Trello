import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const postCards = createAsyncThunk(
  "addingCard/postCards",
  async (cardData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/cards", cardData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
export const getCards = createAsyncThunk(
  "addingCard/getCards",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/cards");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
