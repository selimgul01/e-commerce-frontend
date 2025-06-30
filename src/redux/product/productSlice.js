import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/products/";

export const getAllProducts = createAsyncThunk("products/getAllProduct",async(_,thunkAPI)=>{
    try {
        const response = await axios(API_BASE)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
}) 

export const getProductById = createAsyncThunk("products/getProductById", async(id,thunkAPI)=>{
    try {
        const response = await axios(`${API_BASE}${id}`)
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
})

export const productSlice = createSlice({
    name: "product",
    initialState:{
        products:[],
        singleProduct: null,
        isLoading: false,
        isError: false,
        message: null,
    },
    reducers:{},
    extraReducers:  (builder)=>{

        
            builder.addCase(getAllProducts.pending, (state)=>{
                state.isLoading = true
            }).addCase(getAllProducts.fulfilled, (state,action)=> {
              
                state.message = action.payload.message
                state.products =  action.payload
                state.isLoading = false
            }).addCase(getAllProducts.rejected, (state,action)=>{
                state.isLoading = false
                state.message = action.payload.message
            })

            
            builder.addCase(getProductById.pending, (state)=>{
                state.isLoading = true
            }).addCase(getProductById.fulfilled, (state,action)=> {
              
                state.message = action.payload.message
                state.singleProduct =  action.payload
                state.isLoading = false
            }).addCase(getProductById.rejected, (state,action)=>{
                state.isLoading = false
                state.message = action.payload.message
            })

    }
})


export const {} = productSlice.actions;

export default productSlice.reducer;