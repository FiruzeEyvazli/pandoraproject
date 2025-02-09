import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
import { deleteProductThunk } from "./productSlice"


export const getWishlistThunk = createAsyncThunk('get/wishlist', async () => {
    const response = await axios.get('http://localhost:5000/wishlist')

    return response.data
})

export const deleteWishlistThunk = createAsyncThunk('products/delete', async (id) => {
    const response = await axios.delete(`http://localhost:5000/wishlist/${id}`)

    return id
})



export const postWishlistThunk = createAsyncThunk('post/wishlist', async (data) => {
    const response = await axios.post('http://localhost:5000/wishlist', data)

    return data
})

  



export const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState: {
        wishlist: []
    },
    reducers: {},

    extraReducers: builder => {
        builder

            .addCase(getWishlistThunk.fulfilled, (state, action) => {
                state.loading = false
                state.wishlist = action.payload
            })

            .addCase(getWishlistThunk.pending, (state) => {
                state.loading = true
            })

            .addCase(getWishlistThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })


            //post wishlist


            .addCase(postWishlistThunk.fulfilled, (state,action) => {
                state.loading =false

            })

            .addCase(postWishlistThunk.pending, (state) => {
                state.loading= true
            })

            .addCase(postWishlistThunk.rejected, (state,action) => {
                state.loading=false
                state.error= action.error.message
            })




            // //delete wishlist

            .addCase(deleteProductThunk.fulfilled, (state, action) => {
                state.loading = false
                state.wishlist = state.wishlist.filter(item => item._id !== action.payload)
            })

            .addCase(deleteProductThunk.pending, (state) => {
                state.loading = true
            })

            .addCase(deleteProductThunk.rejected, (state, action) => {
                state.loading = false
                state.error = action.error.message
            })
    }
})


export default wishlistSlice.reducer