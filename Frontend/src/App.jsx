import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { asyncCurrentUser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"
import { asyncLoadProducts } from "./store/actions/productActions"
import { useSelector } from "react-redux";


const App = () => {

  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  const dispatch = useDispatch();

  useEffect(() => {
     !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length === 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="bg-gray-800 overflow-auto text-white h-screen w-screen">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App