import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CustomInput from "./CustomInput";

const initialValue = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
  confirm_password: "",
};
const SignupForm = () => {
  const useFormPayload = useForm(initialValue);
  const { formData, setFormData, handleOnChange } = useFormPayload;

  // handle form submit
  const handleOnSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <>
      <Form onSubmit={handleOnSubmit}>
        <h2 className="text-center mb-4">Create an Account</h2>

        <Row>
          <Col>
            <CustomInput
              label="First Name"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "text",
                name: "first_name",
                value: formData.name,
                placeholder: "Enter your first name",
                required: true,
              }}
            />
          </Col>

          <Col>
            <CustomInput
              label="Last Name"
              handleOnChange={handleOnChange}
              inputAttributes={{
                type: "text",
                name: "last_name",
                value: formData.last_name,
                placeholder: "Enter your last name",
                required: true,
              }}
            />
          </Col>
        </Row>

        <CustomInput
          label="Phone"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "tel",
            name: "phone",
            value: formData.phone,
            placeholder: "Enter your Phone number",
            required: true,
          }}
        />

        <CustomInput
          label="Email"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "email",
            name: "email",
            value: formData.email,
            placeholder: "Enter your Email",
            required: true,
          }}
        />

        <CustomInput
          label="Password"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "password",
            name: "password",
            value: formData.password,
            placeholder: "Enter a Password",
            required: true,
          }}
        />

        <CustomInput
          label="Confirm Password"
          handleOnChange={handleOnChange}
          inputAttributes={{
            type: "password",
            name: "confirm_password",
            value: formData.confirm_password,
            placeholder: "Enter Password",
            required: true,
          }}
        />

        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignupForm;
