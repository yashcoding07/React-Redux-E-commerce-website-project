import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

const UserProfile = () => {

  const user = useSelector((state) => state.userReducer.users);
  const {register, reset, handleSubmit} = useForm({
    defaultValues: {
      username: user?.username,
      email: user?.email,
      password: user?.password
    }
  });

  const logoutHandler = () => {
    
  }

  return (
    <div className="w-full h-screen flex p-10">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="w-1/2 flex flex-col gap-4">
        <input {...register("username")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="text" placeholder="Enter your username" />
        <input {...register("email")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="email" placeholder="Enter your email" />
        <input {...register("password")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="password" placeholder="Enter your password" />
        <div className="flex gap-4">
          <button className="w-fit px-4 py-2 rounded text-xl bg-green-500">Update User</button>
          <button className="w-fit px-4 py-2 rounded text-xl bg-red-500">Logout</button>
        </div>
      </form>
    </div>
  )
}

export default UserProfile