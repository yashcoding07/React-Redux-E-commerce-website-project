import { useEffect } from "react"
import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"
import { asyncCurrentUser } from "./store/actions/userActions"
import { useDispatch } from "react-redux"
import { asyncLoadProducts } from "./store/actions/productActions"

const App = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="bg-gray-800 text-white h-screen w-screen">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App