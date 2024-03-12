import { useCart } from "../context/CartContext.jsx";
import { toast } from "react-toastify";

const DrugCard = ({ id, name, image, price, fav, addToFavorite }) => {
  const { cart, updateCart } = useCart();

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
    toast.success("Added to cart");
  };

  return (
    <>
      <div className="w-[300px] flex flex-col bg-gray-100 rounded-lg overflow-hidden shadow-lg">
        <img src={image} alt={name} className="h-[200px] object-cover" />

        <div className="flex justify-between items-center px-5 py-3 bg-white">
          <h2 className="font-bold text-lg">{name}</h2>
          <p className="font-bold text-green-600">${price}</p>
        </div>

        <div className="flex justify-center items-center py-3">
          <button
            className={`flex items-center justify-center px-4 py-2 text-sm font-bold uppercase rounded ${
              fav === "true"
                ? "bg-rose-500 text-white"
                : "bg-gray-300 text-gray-700 hover:bg-gray-400"
            }`}
            onClick={() => addToFavorite(id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18.54l-1.94-1.81C3.85 12.39 1 9.11 1 6.03 1 3.87 2.35 2 5 2c1.34 0 2.64.88 3.59 2.14C9.36 2.88 10.66 2 12 2c2.65 0 4 1.87 4 4.03 0 3.08-2.85 6.35-7.06 10.69L10 18.54z"
                clipRule="evenodd"
              />
            </svg>
            {fav === "true" ? "Added to Favorites" : "Add to Favorites"}
          </button>
        </div>

        <div className="flex justify-center pb-5">
          <button
            className="px-4 py-2 text-sm font-bold uppercase rounded bg-indigo-600 text-white hover:bg-indigo-700"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default DrugCard;
