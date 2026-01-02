import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/userReducer";
import productSlice from "./reducers/productReducer";
import cartSlice from "./reducers/cartReducer";

export const store = configureStore({
    reducer: {
        userReducer: userSlice,
        productReducer: productSlice,
        cartReducer: cartSlice
    }
});