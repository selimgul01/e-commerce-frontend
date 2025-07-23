import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const API_BASE = "http://localhost:5000/api/favorites";


export const addToFavorite = createAsyncThunk("favorite/addToFavorites", async (productId,thunkAPI) => {
    
    try {
        const token = localStorage.getItem("token")
        const response = await axios.post(`${API_BASE}`,productId,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        console.log("response.data:",response.data)
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Favorilere eklenemedi")
    }
})

export const getFavorites = createAsyncThunk("favorite/getFavorites",async (_,thunkAPI)=>{
    try {
        const token = localStorage.getItem("token")
        const response = await axios.get(API_BASE,{
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        return response.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.message || "Favoriler Alınamadı")
    }
})

export const removeFavorite = createAsyncThunk("favorite/removeFavorite", async (productId,thunkAPI)=>{
    try {
        const token = localStorage.getItem("token")
        const response = await axios.delete(API_BASE,{
            data:productId
        },{
            headers:{
                Authorization: `Bearer ${token}`
            }
        }) 
        return response.data
        
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data?.error || "Favorilerden Kaldırılamadı")
    }
})


const initialState = {
    favorites: [],
    loading: false,
    successMessage:null,
    errorMessage:null,
}

export const favoriteSlice = createSlice({
    name: "favorite",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder

        .addCase(addToFavorite.pending, (state,action)=>{
            state.loading = true
            state.errorMessage = null
            state.successMessage = null
        })
        .addCase(addToFavorite.fulfilled, (state,action)=>{
            console.log("action.payload:", action.payload)
            state.loading = false
            state.favorites = action.payload.data
            state.errorMessage = null
            state.successMessage = action.payload.message
        })
        .addCase(addToFavorite.rejected, (state,action)=>{
            console.log("action.payload:", action.payload)
            state.loading = false
            state.errorMessage = action.payload
        })


        .addCase(getFavorites.pending, (state,action)=>{
            state.loading = true
            state.errorMessage = null
            state.successMessage = null
        })
        .addCase(getFavorites.fulfilled, (state,action)=>{
            state.loading = false
            state.errorMessage = null
            state.successMessage = null
            state.favorites = action.payload
        })
        .addCase(getFavorites.rejected, (state,action)=>{
            state.loading = false
            state.successMessage = null
            state.errorMessage = action.payload
        })

    }
})


export const {} = favoriteSlice.actions;

export default favoriteSlice.reducer;