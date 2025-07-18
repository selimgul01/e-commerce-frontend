import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
    const token = localStorage.getItem("token"); 
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

export const removeFromCart = createAsyncThunk("cart/removeFromCart",async({productId, size},thunkAPI)=>{
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${API_BASE}/remove`,{
      headers:{
        Authorization: `Bearer ${token}`
      },
      data:{ productId, size }
    })
    console.log("res.data.",res.data)
    return res.data.items
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
}) 


export const clearCart = createAsyncThunk("cart/clearCart",async(_,thunkAPI)=>{
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${API_BASE}/clear`,{
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    return res.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
})

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    loading: false,
    error: null,
    isSuccessful: false
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
        state.isSuccessful = true
        state.items = action.payload.items; 
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.isSuccessful = false
      })

      .addCase(clearCart.fulfilled, (state) => {
        state.items = []; 
      })
      .addCase(removeFromCart.fulfilled,(state,action) => {
        
        state.items = action.payload
        state.isSuccessful = true
      })
  },
});
export const { increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
