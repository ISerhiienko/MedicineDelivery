import Form from "../components/Form.jsx";
import { useCart } from "../context/CartContext.jsx";
import CartItem from "../components/CartItem.jsx";

const ShoppingCartPage = () => {
  const { cart } = useCart();

  return (
    <div className="container flex gap-3">
      <section className="p-5 bg-gray-100 w-[400px]">
        <Form />
      </section>
      <section className="w-full bg-gray-100 p-5">
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </section>
    </div>
  );
};

export default ShoppingCartPage;
