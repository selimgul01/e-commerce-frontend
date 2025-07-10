import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const BASE_URL =  "http://localhost:5000/api/reviews"

export const fetchReviews  = createAsyncThunk("reviews/fetchReviews", async ({productId}, thunkAPI) => {

    try {
        const response = await axios.get(`${BASE_URL}/${productId}`)

        console.log("response.data:::", response.data)

        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data.message);
    }
})

const initialState ={
    reviews: [],
    loading: false,
    error: null,
}


export const reviewSlice = createSlice({
    name:"review",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder
      .addCase(fetchReviews.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.loading = false;
        state.reviews = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    }
})


export default reviewSlice.reducer;