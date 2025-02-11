import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const getCategoryThunk = createAsyncThunk('api/category', async () => {
    const response = await axios.get('http://localhost:5000/category')

    return response.data
})


// export const deleteProductThunk =createAsyncThunk('products/delete', async (id) => {
//     const response = await axios.delete(`http://localhost:5000/products/${id}`)

//     return id
// })



export const categorySlice = createSlice({
    name: 'category',
     initialState: {
        category: []
     },
     reducers:{},

     extraReducers: builder => {
        builder 

        .addCase(getCategoryThunk.fulfilled, (state,action) => {
            state.loading =false
            state.category= action.payload
        })

        .addCase(getCategoryThunk.pending, (state) => {
            state.loading= true
        })

        .addCase(getCategoryThunk.rejected, (state,action) => {
            state.loading=false
            state.error= action.error.message
        })


        //  //delete admin

        //  .addCase(deleteProductThunk.fulfilled, (state,action) => {
        //     state.loading= false
        //     state.products = state.products.filter(item => item._id !== action.payload)
        // })

        // .addCase(deleteProductThunk.pending, (state) => {
        //     state.loading=true
        // })

        // .addCase(deleteProductThunk.rejected, (state,action) => {
        //     state.loading =false
        // })



       
     }
})


export default categorySlice.reducer;