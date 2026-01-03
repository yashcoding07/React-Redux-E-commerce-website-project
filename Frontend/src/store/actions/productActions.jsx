import axios from "../../api/Axiosconfig";
import { loadProducts } from "../reducers/productReducer";

export const asyncLoadProducts = () => async (dispatch, getstate) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadProducts(data));
    } catch (error) {
        console.log(error);
    }
} 

export const asyncCreateProduct = (product) => async (dispatch, getstate) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}

export const asyncUpdateProduct = (id, product) => async (dispatch, getstate) => {
    try {
        await axios.patch("/products/" + id, product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}

export const asyncDeleteProduct = (id) => async (dispatch, getstate) => {
    try {
        await axios.delete("/products/" + id);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}