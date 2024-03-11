import { useCart } from "../context/CartContext.jsx";
import axios from "axios";
import { useState } from "react";

const DrugCard = ({ id, name, image, price, fav }) => {
  const { cart, updateCart } = useCart();
  const [favorite, setFavorite] = useState(fav);

  const addToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const newCart = [...cart];

      newCart[existingItemIndex].quantity += 1;

      updateCart(newCart);
    } else {
      const newCartItem = { id, name, image, price, fav, quantity: 1 };

      const newCart = [...cart, newCartItem];

      updateCart(newCart);
    }
  };

  const addToFavorite = async () => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_DOMAIN + `/add-favorite/${id}`,
      );

      setFavorite((prevFavorite) =>
        prevFavorite === "true" ? "false" : "true",
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-[300px] flex flex-col bg-gray-100">
      <img src={image} alt={name} className="h-[200px] object-contain mb-5" />

      <button
        className={`bg-gray-300 mx-10 ${favorite === "true" ? "bg-rose-500" : "bg-gray-100"}`}
        onClick={addToFavorite}
      >
        fovorite
      </button>
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
