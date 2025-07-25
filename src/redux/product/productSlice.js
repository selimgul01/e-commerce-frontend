import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/products";

export const getAllProducts = createAsyncThunk(
  "products/getAllProduct",
  async (filters = {} , thunkAPI) => { 

    const {search , category } = filters

    console.log("filters",category)
    try {
      let query = "";

      if (search) query += `search=${encodeURIComponent(search)}`;
      if (category) query += `${query ? "&" : ""}category=${encodeURIComponent(category)}`;

      const response = await axios(`${API_BASE}?${query}`);
      console.log("response.data",response.data)
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message)
    }
  }
);

export const fetchFilteredProducts = createAsyncThunk(
  "products/fetchFilteredProducts",
  async (params, thunkAPI) => {
    try {
      const query = new URLSearchParams(params).toString();
      const response = await axios.get(`${API_BASE}?${query}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Bir hata oluştu"
      );
    }
  }
);

export const getProductById = createAsyncThunk(
  "products/getProductById",
  async (id, thunkAPI) => {
    try {
      const response = await axios(`${API_BASE}/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Bir hata oluştu"
      );
    }
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    singleProduct: null,
    isLoading: false,
    status: "idle",
    feedbackMessage: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.isLoading = true;
        state.status = "pending";
        state.feedbackMessage = null;
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.feedbackMessage = action.payload.message;
      });

    builder
      .addCase(getProductById.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductById.fulfilled, (state, action) => {
        state.message = action.payload.message;
        state.singleProduct = action.payload;
        state.isLoading = false;
      })
      .addCase(getProductById.rejected, (state, action) => {
        state.isLoading = false;
        state.message = action.payload.message;
      });
  },
});

export const { addFavoriteProduct, clearMessage } = productSlice.actions;

export default productSlice.reducer;
