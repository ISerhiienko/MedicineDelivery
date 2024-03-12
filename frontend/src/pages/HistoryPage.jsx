import FormField from "../components/FormField.jsx";
import { useState } from "react";
import axios from "axios";
import HistoryOrder from "../components/HistoryOrder.jsx";

const HistoryPage = () => {
  const [email, setEmail] = useState("");
  const [orders, setOrders] = useState();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Invalid email format");
    } else {
      axios
        .post(import.meta.env.VITE_SERVER_DOMAIN + "/get-orders", { email })
        .then(async ({ data }) => {
          setOrders(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="container">
      <div className="flex flex-col items-center">
        <p className="mb-5 font-bold text-xl">
          Type your email to find the order
        </p>
        <form className="w-[300px] mb-5 flex flex-col" onSubmit={handleSubmit}>
          <FormField
            label="Email"
            type="text"
            name="email"
            onChange={handleChange}
            value={email}
            errorMessage={error}
            className="mb-4"
          />
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
            Find Order
          </button>
        </form>
      </div>
      <div className="flex flex-col items-center">
        {orders &&
          orders.map((order) => {
            return <HistoryOrder key={order.orderId} {...order} />;
          })}
      </div>
    </div>
  );
};

export default HistoryPage;
