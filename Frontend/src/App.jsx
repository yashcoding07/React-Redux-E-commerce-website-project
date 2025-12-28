import Navbar from "./components/Navbar"
import Mainroutes from "./routes/Mainroutes"

const App = () => {

  return (
    <div className="bg-gray-800 text-white h-screen w-screen">
      <Navbar />
      <Mainroutes />
    </div>
  )
}

export default App