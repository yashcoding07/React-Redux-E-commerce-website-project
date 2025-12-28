import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducer/CartSlice";
import userReducer from "./reducer/userSlice";
import productReducer from "./reducer/ProductSlice";

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer,
        product: productReducer
    }
});
