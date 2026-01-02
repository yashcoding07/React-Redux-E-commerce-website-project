import { nanoid } from "@reduxjs/toolkit";
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { asyncRegisterUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Register = () => {

  const { register, handleSubmit, reset} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (user) => {
    user.id =  nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    navigate("/login");
    reset();
  }

  return (
      <form className="flex flex-col p-5 gap-y-5" onSubmit={handleSubmit(registerHandler)}>
        <input {...register("username")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="text" placeholder="Enter username" />
        <input {...register("email")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="email" placeholder="Enter email" />
        <input {...register("password")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="password" placeholder="Enter password" />
        <button className="w-[20vw] rounded bg-blue-500 text-white px-4 py-2 active:scale-95">Register</button>
        <p>Already have an account? <Link className="text-blue-500" to={"/login"}>Login</Link></p>
      </form>
  )
}

export default Register;