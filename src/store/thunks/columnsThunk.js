import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../api/axiosInstance";

export const postColumn = createAsyncThunk(
  "colum/postColumn",
  async (newColumn, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.post("/column", newColumn);
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
export const getColumn = createAsyncThunk(
  "colum/getColumn",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get("/column");
      return data;
    } catch (error) {
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);
