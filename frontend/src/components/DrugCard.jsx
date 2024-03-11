import { useCart } from "../context/CartContext.jsx";

const DrugCard = ({ id, name, image, price }) => {
  const { cart, updateCart } = useCart();

  const addToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const newCart = [...cart];

      newCart[existingItemIndex].quantity += 1;

      updateCart(newCart);
    } else {
      const newCartItem = { id, name, image, price, quantity: 1 };

      const newCart = [...cart, newCartItem];

      updateCart(newCart);
    }
  };

  return (
    <div className="w-[300px] flex flex-col bg-gray-100">
      <img src={image} alt={name} className="h-[200px] object-contain" />
      <div className="flex justify-between p-5">
        <h2 className="font-bold text-xm uppercase">{name}</h2>
        <p className="font-bold text-green-600">{price}$</p>
      </div>
      <div className="flex justify-center mb-5">
        <button
          className="font-bold bg-indigo-600 text-cyan-50"
          onClick={addToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DrugCard;
