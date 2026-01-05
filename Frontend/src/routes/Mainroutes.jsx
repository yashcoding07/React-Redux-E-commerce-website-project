import {Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CreateProduct from "../pages/admin/CreateProduct";
import ProductDetails from "../pages/ProductDetails";
import UserProfile from "../pages/users/UserProfile";
import { useSelector } from "react-redux";

const Mainroutes = () => {

  const { users } = useSelector((state) => state.userReducer);

  return (
    <Routes>
        <Route path="/products" element={users ? <Products /> : <Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/admin/create-product" element={<CreateProduct />} />
        <Route path="/admin/user-profile" element={<UserProfile />}/>
        <Route path="/products/product/:id" element={<ProductDetails />} />
    </Routes>
  )
}

export default Mainroutes