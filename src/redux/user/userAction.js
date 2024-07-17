import { toast } from "react-toastify";
import { getUser } from "../../axios/userAxios";
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
