import FormField from "./FormField.jsx";

const Form = ({ userData, handleChange, formErrors }) => {
  return (
    <form>
      <FormField
        label="Name"
        type="text"
        name="name"
        value={userData.name}
        onChange={handleChange}
        errorMessage={formErrors.name}
      />
      <FormField
        label="Email"
        type="email"
        name="email"
        value={userData.email}
        onChange={handleChange}
        errorMessage={formErrors.email}
      />
      <FormField
        label="Phone"
        type="tel"
        name="phone"
        value={userData.phone}
        onChange={handleChange}
        errorMessage={formErrors.phone}
      />
      <FormField
        label="Address"
        type="text"
        name="address"
        value={userData.address}
        onChange={handleChange}
        errorMessage={formErrors.address}
      />
    </form>
  );
};

export default Form;
