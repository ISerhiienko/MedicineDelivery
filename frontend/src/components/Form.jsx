import { useState } from "react";
import FormField from "./FormField.jsx";

const Form = ({ userData, handleChange }) => {
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
