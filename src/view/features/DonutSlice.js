import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://655d525d9f1e1093c599349a.mockapi.io/donutData/";

export const fetchDonut = createAsyncThunk("donut/fetchDonut", async () => {
  const response = await axios.get(url);
  return response.data;
});

export const addDonut = createAsyncThunk("donut/addDonut", async (newDonut) => {
  const response = await axios.post(url, newDonut);
  return response.data;
});

export const deleteDonut = createAsyncThunk("donut/deleteDonut", async (id) => {
  await axios.delete(`${url}/${id}`);
  return id;
});

export const editDonut = createAsyncThunk(
  "donut/editDonut",
  async ({ id, updateDonut }) => {
    const response = await axios.put(`${url}/${id}`, updateDonut);
    return response.data;
  }
);

const donutSlice = createSlice({
  name: "Donut",
  initialState: {
    donuts: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDonut.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDonut.fulfilled, (state, action) => {
        state.status = "Succeed";
        state.donuts = action.payload;
      })
      .addCase(fetchDonut.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error;
      })
      .addCase(addDonut.fulfilled, (state, action) => {
        state.donuts.push(action.payload);
      })
      .addCase(deleteDonut.fulfilled, (state, action) => {
        state.donuts = state.donuts.filter(
          (donut) => donut.id !== action.payload
        );
      })
      .addCase(editDonut.fulfilled, (state, action) => {
        const { id, updateDonut } = action.payload;
        const index = state.donuts.findIndex((donut) => donut.id === id);
        if (index !== -1) {
          const updatedDonuts = [...state.donuts];
          updatedDonuts[index] = { ...updatedDonuts[index], ...updateDonut };
          return {
            ...state,
            donuts: updatedDonuts,
          };
        }
        return state;
      });
  },
});

export default donutSlice.reducer;
