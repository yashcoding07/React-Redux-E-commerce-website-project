import { Link } from "react-router-dom"
import { useForm } from "react-hook-form";

const Login = () => {

  const { register, handleSubmit, reset } = useForm();
  

  const submitHandler = (data) =>{
    console.log(data);
    reset();
  }
  
  return (
    <form className="flex flex-col p-5 gap-y-5" onSubmit={handleSubmit(submitHandler)}>
      <input {...register("username")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="text" placeholder="Enter Username" />
      <input {...register("password")} className="w-1/2 outline-0 text-lg border-b-2 border-gray-600 p-2" type="password" placeholder="Enter password" />
      <button className="w-[20vw] rounded bg-blue-500 text-white px-4 py-2 active:scale-95">Login</button>
      <p>Don't have an account? <Link className="text-blue-500" to={"/register"}>Register</Link></p>
    </form>
  )
}

export default Login