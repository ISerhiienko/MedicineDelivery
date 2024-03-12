import Form from "../components/Form.jsx";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";
import { useState } from "react";
import { generateOrderId } from "../utils/generateOrderId.js";

const ShoppingCartPage = () => {
  const { cart } = useCart();

  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });

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

  const orderId = generateOrderId();

  const handleSubmit = () => {
    const data = {
      orderId,
      userInfo: userData,
      orderList: cart,
    };
    console.log(data);
  };

  return (
    <>
      <div className="container flex gap-3">
        <section className="p-5 bg-gray-100 w-[400px]">
          <Form userData={userData} handleChange={handleChange} />
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
