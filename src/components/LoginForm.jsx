import React from "react";
import { Button, Form } from "react-bootstrap";
import CustomInput from "./CustomInput";
import useForm from "../hooks/useForm";
import { loginUser } from "../axios/userAxios";

const initialFormData = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const { formData, handleOnChange } = useForm(initialFormData);
  const { email, password } = formData;

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    // call axios to hit login endpoint
    const result = await loginUser(formData);
  };
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
