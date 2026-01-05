import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { asyncDeleteUser, asyncLogoutUser, asyncUpdateUser } from "../../store/actions/userActions";

const UserProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.userReducer);
  const {register, reset, handleSubmit} = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password
    }
  });

  const updateUserHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user));
  }

  const logoutHandler = () => {
    dispatch(asyncLogoutUser());
    navigate("/login");
  }

  const deleteUserHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigate("/login");
  }

  return (
    <div className="w-full h-screen flex p-10">
      <form onSubmit={handleSubmit(updateUserHandler)} className="w-1/2 flex flex-col gap-4">
        <input {...register("username")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="text" placeholder="Enter your username" />
        <input {...register("email")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="email" placeholder="Enter your email" />
        <input {...register("password")} className="w-full p-3 border-b-2 border-gray-300 outline-0 text-xl" type="password" placeholder="Enter your password" />
        <div className="flex gap-4">
          <button className="w-fit px-4 py-2 rounded text-xl bg-green-500">Update User</button>
          <button type="button" onClick={logoutHandler} className="w-fit px-4 py-2 rounded text-xl bg-red-400">Logout User</button>
          <button type="button" onClick={deleteUserHandler} className="w-fit px-4 py-2 rounded text-xl bg-red-600">Delete User</button>
        </div>
      </form>
    </div>
  )
}

export default UserProfile