import { toast } from "react-toastify";
import { getAccessToken, getUser } from "../../axios/userAxios";
import { setUser } from "./userSlice";

export const getUserAction = () => async (dispatch) => {
  // call axios to get user
  const result = await getUser();
  console.log(result);
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

  // if no access token get new access token based onthe refresh token
  if (!accessJWT && refreshJWT) {
    // call axios to get new access token
    getAccessToken();
  }
};
