import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productData: []
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        loadProduct: (state, actions) => {
            state.productData = actions.payload;
        }
    }
});

export const { loadProduct } = productSlice.actions;
export default productSlice.reducer;