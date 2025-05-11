import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const postCards = createAsyncThunk(
  "addingCard/postCards",
  async (cardData, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/cards", cardData);
      return data;
      // console.log(data);
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
export const updateCard = createAsyncThunk(
  "addingCard/updateCard",
  async ({ id, title }, { rejectWithValue }) => {
    try {
      console.log(`Updating card with ID: ${id} and title: ${title}`); 
      const { data } = await axiosInstance.put(`/cards/${id}`, { title });
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
export const deleteCard = createAsyncThunk(
  "addingCard/deleteCard",
  async (cardId, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.delete(`/cards/${cardId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
