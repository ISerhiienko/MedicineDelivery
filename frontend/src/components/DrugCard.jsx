import { useCart } from "../context/CartContext.jsx";

const DrugCard = ({ id, name, img, price }) => {
  const { cart, updateCart } = useCart();

  const addToCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === id);
    if (existingItemIndex !== -1) {
      const newCart = [...cart];

      newCart[existingItemIndex].quantity += 1;

      updateCart(newCart);
    } else {
      const newCartItem = { id, name, price, quantity: 1 };

      const newCart = [...cart, newCartItem];

      updateCart(newCart);
    }
  };

  return (
    <div className="w-[300px] flex flex-col bg-emerald-100">
      <img src={img} alt="paracetamol" />
      <div className="flex justify-between p-3">
        <h2 className="font-bold">{name}</h2>
        <p className="italic">price: {price}$</p>
      </div>
      <div className="flex justify-center mb-2">
        <button className="font-bold fill-amber-300" onClick={addToCart}>
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default DrugCard;
