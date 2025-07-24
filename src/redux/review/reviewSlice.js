import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/reviews"; 


export const createReview = createAsyncThunk("review/createReview",async({productId, rating, comment},thunkAPI)=>{

  const token = localStorage.getItem("token")

  try {
    const response = await axios.post(BASE_URL, {productId, rating, comment} , {
      headers:{
        Authorization: `Bearer ${token}`
      }
    })
    console.log("response.data review:",response.data)
    return response.data
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
})

export const fetchReviews = createAsyncThunk(
  "reviews/fetchReviews",
  async ({ productId }, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${productId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

const initialState = {
  reviews: [],
  loading: false,
  status : "idle",
  feedbackMessage: null
};

export const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    resetReviewStatus: (state)=>{
      state.feedbackMessage = null
     
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.feedbackMessage = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.feedbackMessage = action.payload;
      });

      builder
      .addCase(createReview.pending, (state) => {
        state.status = "pending"
        state.loading = true
        state.feedbackMessage = null;
      })
      .addCase(createReview.fulfilled, (state, action) => {
        state.status = "success"
        state.loading = false;
        state.feedbackMessage = action.payload.message
      })
      .addCase(createReview.rejected, (state, action) => {
        state.status = "error"
        state.loading = false;
        state.feedbackMessage = action.payload
      });
  },
});

export const {resetReviewStatus} = reviewSlice.actions;


export default reviewSlice.reducer;
