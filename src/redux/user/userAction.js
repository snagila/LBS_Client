import { getUser } from "../../axios/userAxios";

export const getUserAction = () => async (dispatch) => {
  // call axios to get user
  const result = await getUser();
};
