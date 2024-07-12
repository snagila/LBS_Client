import { useState } from "react";

const useForm = (initialFormData) => {
  const [formData, setFormData] = useState(initialFormData);
  const handleOnchange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  return {
    formData,
    setFormData,
    handleOnchange,
  };
};
export default useForm;
