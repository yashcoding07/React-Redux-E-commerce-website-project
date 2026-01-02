import axios from "../../api/Axiosconfig";
import { loadUser } from "../reducers/userReducer";

export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("users"));
    if (user) dispatch(loadUser(user));
    else console.log("User not found");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async () => {
  try {
    const { data } = await axios.get(
      `/users?email:${user.email}&password:${user.password}`
    );
    localStorage.setItem("users", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async () => {
  try {
    localStorage.removeItem("users", user);
    console.log("User Logged out!");
  } catch (error) {
    console.log(error);
  }
};

export const asyncRegisterUser = (user) => async () => {
  try {
      const res = await axios.post("/users", user);
      console.log(res);
  } catch (error) {
    console.log(error);
  }
};
