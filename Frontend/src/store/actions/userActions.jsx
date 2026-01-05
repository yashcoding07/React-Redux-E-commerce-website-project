import axios from "../../api/Axiosconfig";
import { loadUser, removeUser } from "../reducers/userReducer";

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
      `/users?email=${user.email}&password=${user.password}`
    );
    localStorage.setItem("users", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatch) => {
  try {
    localStorage.removeItem("users", user);
    dispatch(removeUser(user));
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

export const asyncUpdateUser = (id, user) => async (dispatch) => {
  try {
    const {data} = await axios.patch("/users/" + id, user);
    localStorage.setItem("users", JSON.stringify(data));
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
  }
}

export const asyncDeleteUser = (id) => async (dispatch, getstate) => {
  try {
      await axios.delete("/users", id);
      dispatch(asyncLogoutUser());
    } catch (error) {
      console.log(error);
    }
}