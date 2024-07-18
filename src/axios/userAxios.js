import axios from "axios";

const USER_API_URL = "http://localhost:8000/api/user";

// PUBLIC ROUTES
// Create a User | SignUp
export const createUser = (userObj) => {
  const response = axios
    .post(USER_API_URL, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error));
  return response;
};

// login user
export const loginUser = (userObj) => {
  const response = axios
    .post(`${USER_API_URL}/login`, userObj)
    .then((res) => res.data)
    .catch((error) => console.log(error.message));
  return response;
};

// PRIVATE ROUTES

// get user
export const getUser = () => {
  const accessJWT = sessionStorage.getItem("accessJWT");

  const response = axios
    .get(USER_API_URL, {
      headers: {
        Authorization: accessJWT,
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error.message));
  return response;
};

// get accesstoken based on refresh token
export const getAccessToken = () => {
  const response = axios
    .get(`${USER_API_URL}/accessJWT`, {
      headers: {
        Authorization: localStorage.getItem("refreshJWT"),
      },
    })
    .then((res) => res.data)
    .catch((error) => console.log(error.message));
  return response;
};

// logout user
export const logoutUser = () => {
  console.log(sessionStorage.getItem("accessJWT"));
  const response = axios
    .post(
      `${USER_API_URL}/logout`,
      {},
      {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => console.log(error.message));
  return response;
};
