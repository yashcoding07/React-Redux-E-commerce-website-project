import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        loadCart: (state, actions) => {
            state.cartData = actions.payload;
        }
    }
});

export const { loadCart } = cartSlice.actions;
export default cartSlice.reducer;
