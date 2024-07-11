import React, { useState } from "react";
import { Button, Container, Stack } from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const AuthForm = () => {
  const [isLoginForm, setIsLoginForm] = useState(false);
  return (
    <>
      <Container>
        <Stack>
          {isLoginForm ? <LoginForm /> : <SignupForm />}
          {isLoginForm ? (
            <p>
              Don&apos;t have an account?
              <Button
                variant="link"
                className="p-0"
                onClick={() => setIsLoginForm(false)}
              >
                SignUp
              </Button>
            </p>
          ) : (
            <p>
              Already have an account?
              <Button
                variant="link"
                className="p-0"
                onClick={() => setIsLoginForm(true)}
              >
                Login{" "}
              </Button>
            </p>
          )}
        </Stack>
      </Container>
    </>
  );
};

export default AuthForm;
