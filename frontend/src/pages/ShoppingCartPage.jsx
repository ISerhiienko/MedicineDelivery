import Form from "../components/Form.jsx";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import { useState } from "react";
import { generateOrderId } from "../utils/generateOrderId.js";
import axios from "axios";
import { toast } from "react-toastify";
import { validateForm } from "../utils/validateForm.js";

const ShoppingCartPage = () => {
  const { cart } = useCart();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    if (!validateForm(userData, setFormErrors)) {
      return;
    }

    const orderId = generateOrderId();

    const data = {
      orderId,
      userInfo: userData,
      orderList: cart,
      totalPrice,
    };

    try {
      await axios.post(
        import.meta.env.VITE_SERVER_DOMAIN + "/save-order",
        data,
      );

      toast.success("Order saved successfully");
    } catch (error) {
      console.error("Error saving order:", error);
      toast.error("Error saving order");
    }
  };

  return (
    <>
      <div className="container flex gap-3">
        <section className="p-5 bg-gray-100 w-[400px]">
          <Form
            userData={userData}
            handleChange={handleChange}
            formErrors={formErrors}
          />
        </section>
        <section className="w-full bg-gray-100 p-5 h-[600px] overflow-y-auto">
          {cart.length === 0 ? (
            <p className="text-center text-2xl text-indigo-500">
              Your cart is empty
            </p>
          ) : (
            cart.map((item) => {
              return <CartItem key={item.id} {...item} />;
            })
          )}
        </section>
      </div>
      <div className="container content-center">
        <section className="flex items-center justify-end p-10 mt-5 bg-gray-100">
          <p className="mx-10">
            Total price: <span className="font-bold">{totalPrice}</span>
          </p>
          <button className="bg-indigo-600 text-cyan-50" onClick={handleSubmit}>
            Submit
          </button>
        </section>
      </div>
    </>
  );
};

export default ShoppingCartPage;
