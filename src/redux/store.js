import { configureStore } from "@reduxjs/toolkit";
import  productSlice  from "./reducers/productSlice";
import  basketSlice  from "./reducers/basketSlice";
import  wishlistSlice  from "./reducers/wishlistSlice";
import  categorySlice  from "./reducers/categorySlice";
import authReducer from './reducers/authSlice';

export const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice,
        wishlist: wishlistSlice,
        category: categorySlice,
        auth: authReducer

        
    }
})