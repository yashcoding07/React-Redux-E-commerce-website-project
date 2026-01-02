import axios from "../../api/Axiosconfig";
import { loadProducts } from "../reducers/productReducer";

export const asyncLoadProducts = () => async (dispatch) => {
    try {
        const { data } = await axios.get("/products");
        dispatch(loadProducts(data));
    } catch (error) {
        console.log(error);
    }
} 

export const asyncCreateProduct = (product) => async (dispatch) => {
    try {
        await axios.post("/products", product);
        dispatch(asyncLoadProducts());
    } catch (error) {
        console.log(error);
    }
}