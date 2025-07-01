import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE = "http://localhost:5000/api/cart";

export const addToCart = createAsyncThunk(
  "cart/addToCart",
  async ({ productId, quantity, size }, thunkAPI) => {
    try {
      const token = localStorage.getItem("token");
      const res = await axios.post(
        `${API_BASE}/add`,
        { productId, quantity, size },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Ürün sepete eklenemedi"
      );
    }
  }
);

export const getCart = createAsyncThunk("cart/getCart", async (_, thunkAPI) => {
  try {
    const token = localStorage.getItem("token"); // token ile kullanıcıyı tanıyoruz
    const res = await axios.get(`${API_BASE}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data?.message || "Sepet getirilemedi"
    );
  }
});

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {
    increaseQuantity: (state, action) => {
      const { productId, size } = action.payload;

      state.items = state.items.map(
        (item) =>
          (
            item.product._id === productId && item.size === size && item.quantity < item.product.stock
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
          )
      );
    },

    decreaseQuantity: (state, action) => {
      const { productId, size } = action.payload;
      state.items = state.items.map((item) =>
         ( item.product._id === productId && item.size === size && item.quantity > 1
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item)
      );
    },
  },
  extraReducers: (builder) => {
    builder
      // getCart
      .addCase(getCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })

      // addToCart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items; // backend’den gelen güncellenmiş sepet
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});
export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
