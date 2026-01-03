import { Link, useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import { asyncLoginUser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    navigate("/");
    reset();
  }
  
  return (
    <form className="flex flex-col p-5 gap-y-5" onSubmit={handleSubmit(loginHandler)}>
      <input {...register("username")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="email" placeholder="Enter Email" />
      <input {...register("password")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="password" placeholder="Enter password" />
      <button className="w-[20vw] rounded bg-blue-500 text-white px-4 py-2 active:scale-95">Login</button>
      <p>Don't have an account? <Link className="text-blue-500" to={"/register"}>Register</Link></p>
    </form>
  )
}

export default Login;