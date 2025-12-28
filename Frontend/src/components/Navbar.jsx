import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="flex text-lg justify-center gap-x-[5%] p-3 text-gray-300 ">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/products"}>Products</NavLink>
            <NavLink to={"/Login"}>Login</NavLink>
        </nav>
    )
}

export default Navbar