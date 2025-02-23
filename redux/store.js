import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/productSlice";
import basketSlice from "./reducers/basketSlice";
import wishlistSlice from "./reducers/wishlistSlice";
import categorySlice from "./reducers/categorySlice";
import authReducer, { loadUserFromStorage } from "./reducers/authSlice";
import paymentSlice from './reducers/paymentSlice'; 

export const store = configureStore({
    reducer: {
        products: productSlice,
        basket: basketSlice,
        wishlist: wishlistSlice,
        category: categorySlice,
        auth: authReducer,
        payment: paymentSlice,

    }
});



export default store;
