import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getProductsThunk = createAsyncThunk('api/products', async () => {
    const response = await axios.get('http://localhost:5000/products')

    return response.data
})


export const deleteProductThunk =createAsyncThunk('products/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5000/products/${id}`)

    return id
})


export const addFormikThunk = createAsyncThunk('api/formik', async (data) => {
    const response = await axios.post('http://localhost:5000/products', data)

    return data
})


export const productSlice = createSlice({
    name: 'products',
     initialState: {
        products: []
     },
     reducers:{},

     extraReducers: builder => {
        builder 

        .addCase(getProductsThunk.fulfilled, (state,action) => {
            state.loading =false
            state.products= action.payload
        })

        .addCase(getProductsThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(getProductsThunk.rejected, (state,action) => {
            state.loading=false
            state.error= action.error.message
        })


         //delete admin

         .addCase(deleteProductThunk.fulfilled, (state,action) => {
            state.loading= false
            state.products = state.products.filter(item => item._id !== action.payload)
        })

        .addCase(deleteProductThunk.pending, (state) => {
            state.loading=true
        })

        .addCase(deleteProductThunk.rejected, (state,action) => {
            state.loading =false
        })

        //add Formik

        .addCase(addFormikThunk.fulfilled, (state,action) => {
            state.loading= false
            
        })

        .addCase(addFormikThunk.pending, (state) => {
            state.loading=true
        })

        .addCase(addFormikThunk.rejected, (state,action) => {
            state.loading =false

        })


        

       
     }
})


export default productSlice.reducer