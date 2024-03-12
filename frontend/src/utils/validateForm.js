export const validateForm = (userData, setFormErrors) => {
  const errors = {};
  if (!userData.name) {
    errors.name = "Name is required";
  }
  if (!userData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
    errors.email = "Invalid email format";
  }
  if (!userData.phone) {
    errors.phone = "Phone is required";
  } else if (!/^\d+$/.test(userData.phone)) {
    errors.phone = "Phone must contain only digits";
  }
  if (!userData.address) {
    errors.address = "Address is required";
  }
  setFormErrors(errors);
  return Object.keys(errors).length === 0;
};
