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

export const removeFromCart = createAsyncThunk("cart/removeFromCart",async(productId,thunkAPI)=>{
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(`${API_BASE}/remove`,{
      headers:{
        Authorization: `Bearer ${token}`
      },
      data: productId 
    })
    return res.data
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
    status: "idle",
    feedbackMessage: false
  },
  reducers: {
    clearStatus: (state)=>{
      state.feedbackMessage = false
      state.status ="idle"
    },
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
        state.status = "pending";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.items;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.loading = false;
        state.status = "error"
        state.feedbackMessage = action.payload;
      })

      // addToCart
      .addCase(addToCart.pending, (state) => {
        state.loading = true;
        state.feedbackMessage = null;
        state.status = "pending"
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        state.loading = false;
        state.status = "success"
        state.feedbackMessage = action.payload.message
        state.items = action.payload.cart.items; 
      })
      .addCase(addToCart.rejected, (state, action) => {
        state.loading = false;
        state.feedbackMessage = action.payload;
        state.status = "error"
      })

      .addCase(clearCart.fulfilled, (state) => {
        state.items = []; 
      })
      .addCase(removeFromCart.pending,(state,action) => {
        state.feedbackMessage = null
        state.status = "pending"
        state.loading = true 
      })
      .addCase(removeFromCart.fulfilled,(state,action) => {
        const {productId} = action.meta.arg
        state.feedbackMessage = action.payload.message
        state.status = "success"
        state.items = state.items.filter((item) => item._id !== productId )
      }).addCase(removeFromCart.rejected,(state,action) => {
        state.feedbackMessage = action.payload
        state.status = "error"
        state.loading = false 
      })
  },
});
export const { increaseQuantity, decreaseQuantity, clearStatus } = cartSlice.actions;

export default cartSlice.reducer;
