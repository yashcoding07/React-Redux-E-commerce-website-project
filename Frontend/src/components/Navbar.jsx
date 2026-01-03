import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex text-lg justify-center gap-x-[5%] p-3 text-gray-300 ">
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/products"}>Products</NavLink>
      {user ? (
        <>
            <NavLink to={"/admin/create-product"}>Create Product</NavLink>
            <NavLink to={"/admin/user-profile"}>Settings</NavLink>
        </>
      ) : (
        <>
            <NavLink to={"/Login"}>Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Navbar;
