import { useState } from "react";
import FormField from "./FormField.jsx";

const Form = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <form>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
      />
      <FormField
        label="Phone"
        type="tel"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
      />
      <FormField
        label="Address"
        type="text"
        name="address"
        value={userData.address}
        onChange={handleChange}
      />
    </form>
  );
};

export default Form;
