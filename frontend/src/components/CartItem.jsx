import { useCart } from "../context/CartContext.jsx";

const CartItem = ({ id, name, image, price, quantity }) => {
  const { cart, updateCart } = useCart();

  const handleDecrement = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(item.quantity - 1, 0) };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleIncrement = () => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateCart(updatedCart);
  };

  const handleRemove = () => {
    const updatedCart = cart.filter((item) => item.id !== id);
    updateCart(updatedCart);
  };

  return (
    <div className="flex gap-3  w-full border border-solid border-gray-500 mb-5">
      <div className="w-full flex">
        <img
          src={image}
          alt="paracetamol"
          className="h-[200px] w-[200px] object-contain"
        />
        <div className="w-full p-10">
          <div className="flex justify-between mb-5">
            <p className="text-xl">
              name: <span className="font-bold">{name}</span>
            </p>
            <p className="text-xl">
              price: <span className="font-bold">{price * quantity}</span>$
            </p>
          </div>
          <div className="flex justify-center items-center pb-5">
            <button
              className="font-bold fill-amber-300 border border-solid border-black"
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="font-bold pl-5 pr-5">{quantity}</span>
            <button
              className="font-bold fill-amber-300 border border-solid border-black"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="flex justify-center items-center p-5 bg-rose-300 text-center hover:cursor-pointer hover:bg-rose-400 transition"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
