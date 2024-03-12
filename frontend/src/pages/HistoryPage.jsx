import FormField from "../components/FormField.jsx";
import { useState } from "react";

const HistoryPage = () => {
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <p className="mb-5 font-bold text-xl">
          If you want to find your order - type email
        </p>
        <form className="w-[300px] mb-5">
          <FormField
            label="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={email}
            required
          />
          <button className="bg-indigo-600 text-cyan-50">Find order</button>
        </form>
      </div>
      <div className="flex flex-col items-center">list of orders</div>
    </div>
  );
};

export default HistoryPage;
