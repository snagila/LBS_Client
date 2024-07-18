import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import useForm from "../hooks/useForm";
import { loginUser } from "../axios/userAxios";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { autoLoginAction, getUserAction } from "../redux/user/userAction";
import { useNavigate } from "react-router-dom";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;
  const dispatch = useDispatch();

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // call axios to hit login endpoint
    const result = await loginUser(formData);

    if (result.status === "error") {
      return toast.error(result.message);
    }

    // IF SUCCESSFUL LOGIN
    // store accessJWT in session storage  and refreshJWT in local storage
    sessionStorage.setItem("accessJWT", result.data.accessJWT);
    localStorage.setItem("refreshJWT", result.data.refreshJWT);

    // then dispatch an action to get user info
    dispatch(getUserAction());
  };

  // logic to redirect user to dashboard once logged in
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    // if logged in redirect to required route
    if (user?._id) {
      navigate("/admin");
    }
    // if not logged in try auto logging in
    if (!user?._id) {
      dispatch(autoLoginAction());
    }
  }, [user._id, navigate, dispatch]);
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <CustomInput
          label="Email"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "email",
            name: "email",
            value: email,
            placeholder: "Enter your email ",
            required: true,
          }}
        />
        <CustomInput
          label="Password"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "password",
            name: "password",
            value: password,
            placeholder: "Enter your password ",
            required: true,
          }}
        />
        <Button variant="primary" type="submit" className="mb-2">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default LoginForm;
