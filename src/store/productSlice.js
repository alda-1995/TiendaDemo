import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    products: [],
    status: false,
    error: null
}

export const getProducts = createAsyncThunk('productos/getProducts', async() => {
    const response = await axios.get('/db/products.json');
    return response.data;
});

export const productSlice = createSlice({
    name: "productos",
    initialState,
    reducers:{
    },
    extraReducers: (builder) =>{
        builder.addCase(getProducts.pending, (state ) =>{
            state.status = "loading";
        }).addCase(getProducts.fulfilled, (state, action) =>{
            state.status = "succeded";
            state.products = action.payload;
        }).addCase(getProducts.rejected, (state, action) =>{
            state.status = "failed";
            state.error = action.error.message;
        })
    }
})

export const { setProducts } = productSlice.actions

export default productSlice.reducer