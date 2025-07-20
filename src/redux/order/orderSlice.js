import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/orders";

export const createOrder = createAsyncThunk(
  "order/createOrder", 
  async (shippingAddress, thunkAPI) => {
    const token = localStorage.getItem("token")

    try {
      const response = await axios.post(API_BASE, shippingAddress, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("response.data:",response.data)
      return response.data.order;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Sipariş oluşturulamadı"
      );
    }
  }
);

export const fetchOrder = createAsyncThunk(
  "order/fetchOrder",
  async (_, thunkAPI) => {
    const token = localStorage.getItem("token");
    try {
      const response = await axios.get(`${API_BASE}/my-orders`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(" response.data", response.data);
      return response.data;
    } catch (error) {
      return  console.log(error.response?.data?.message || "Sipariş Getirilemedi")
    }
  }
);

const initialState = {
  orders: [],
  order: null,
  loading: false,
  error: null,
  success: false,
};

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    clearStatus: (state) => {
      state.success = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false
        console.log("sipariş başarılı")
        state.success = true
        state.order = action.payload
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false
        state.error = action.payload
      })

      .addCase(fetchOrder.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchOrder.fulfilled, (state, action) => {
        state.loading = false
        state.orders = action.payload
      })
      .addCase(fetchOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const {clearStatus} = orderSlice.actions;

export default orderSlice.reducer;
