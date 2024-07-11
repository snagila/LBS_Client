import React from "react";
import { Form } from "react-bootstrap";

const CustomInput = ({ label, inputAttributes, handleOnChange }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label className="fw-bold">{label}</Form.Label>
        <Form.Control {...inputAttributes} onChange={handleOnChange} />
      </Form.Group>
    </>
  );
};

export default CustomInput;
