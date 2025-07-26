import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

const API_BASE = "http://localhost:5000/api/auth/";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(`${API_BASE}register`, data);
      localStorage.setItem("token", response.data.token);
      return response.data;
    } catch (error) {
      console.log("error", error.response)
      toast.error(error.response?.data?.message)
      return  thunkAPI.rejectWithValue(response.data.message)
    }
  }
);

export const login = createAsyncThunk("auth/login", async(data, thunkAPI)=>{
    try {
        const response = await axios.post(`${API_BASE}login`, data);
        localStorage.setItem("token", response.data.token);
        return response.data;
    } catch (error) {
      console.log("error", error)
      toast.error(error.response?.data?.message)
      return  thunkAPI.rejectWithValue(response.data.message)
    }
})

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null, 
    isLoading: false,
    isError: false,
    message: null,
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoading = true
      state.user = null;
      state.isLoading = false
      localStorage.clear()
    },
  },
  extraReducers: (builder)=>{

    builder.addCase(register.pending, (state)=>{
        state.isLoading = true
    }).addCase(register.fulfilled, (state,action)=> {
        state.message = action.payload.message
        state.user =  action.payload
        state.isLoading = false
    }).addCase(register.rejected, (state,action)=>{
        state.isLoading = false
        state.isError = true
    })


    builder.addCase(login.pending, (state)=>{
        state.isLoading = true
    }).addCase(login.fulfilled, (state,action)=> {
        state.message = action.payload.message
        state.user =  action.payload
        state.isLoading = false
    }).addCase(login.rejected, (state,action)=>{
        state.isLoading = false
        state.isError = true
    })
  }
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;
