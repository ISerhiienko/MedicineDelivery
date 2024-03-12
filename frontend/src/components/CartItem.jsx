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
    <div className="flex items-center justify-between w-full border border-solid border-gray-300 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out p-4">
      <div className="flex items-center w-1/2">
        <img
          src={image}
          alt={name}
          className="w-28 h-28 object-cover rounded-lg mr-4"
        />
        <div className="flex flex-col">
          <p className="text-lg font-semibold">{name}</p>
          <p className="text-xl text-green-600">${price * quantity}</p>
          <div className="flex items-center mt-2">
            <button
              onClick={handleDecrement}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              -
            </button>
            <span className="mx-4">{quantity}</span>
            <button
              onClick={handleIncrement}
              className="w-8 h-8 flex items-center justify-center bg-gray-200 text-gray-600 font-semibold rounded-full focus:outline-none hover:bg-gray-300 transition duration-300 ease-in-out"
            >
              +
            </button>
          </div>
        </div>
      </div>
      <button
        onClick={handleRemove}
        className="flex items-center justify-center w-24 h-24 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300 ease-in-out focus:outline-none"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
