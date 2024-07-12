import axios from "axios";

const USER_API_URL = "http://localhost:8000/api/user";

// Create a User | SignUp
export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};
