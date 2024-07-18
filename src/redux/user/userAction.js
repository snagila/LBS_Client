import { toast } from "react-toastify";
import { getAccessToken, getUser, logoutUser } from "../../axios/userAxios";
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
  // call axios to get user
  const result = await getUser();
  if (result.status === "error") {
    toast.error(result.message);
  }
  dispatch(setUser(result.data));
};

// Auto login
export const autoLoginAction = () => async (dispatch) => {
  // check if the access token exists
  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  // if the user is logging in for the first time in browser
  if (!accessJWT && !refreshJWT) {
    return;
  }
  console.log(accessJWT);
  // if no access token get new access token based onthe refresh token
  if (!accessJWT && refreshJWT) {
    // call axios to get new access token
    const result = await getAccessToken();

    if (result.status === "success") {
      // set new accessJWT
      sessionStorage.setItem("accessJWT", result.data);
      dispatch(getUserAction());
      return;
    }
  }
  // if accesstoken is present,get user
  dispatch(getUserAction());
};

// logout user from the system
export const logoutUserAction = () => async (dispatch) => {
  // logout from the api before ui
  const result = await logoutUser();
  if (result.status === "error") {
    return toast.error(result.message);
  }
  // rmove token from the browser storage
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  // clear user state
  dispatch(setUser({}));
};
