import axios from "axios";
import { useEffect, useState } from "react";
import DrugCard from "../components/DrugCard.jsx";

const products = [
  { id: 1, name: "drug 1", price: 10 },
  { id: 2, name: "drug 2", price: 20 },
  { id: 3, name: "drug 3", price: 30 },
  { id: 4, name: "drug 4", price: 40 },
  { id: 5, name: "drug 5", price: 50 },
];

const ShopPage = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchStores = () => {
    axios
      .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-stores")
      .then(async ({ data }) => {
        setStores(data);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchStores();
  }, []);

  return (
    <div className="container flex gap-3">
      <section className="p-5 border border-indigo-600">
        <h1 className="mb-5 text-xl font-medium text-center">Shops:</h1>

        <div className="shop-list flex flex-col">
          {!loading ? (
            <p>loading... </p>
          ) : (
            stores.length &&
            stores.map(({ id, name }) => {
              return (
                <button key={id} className="mb-5 bg-indigo-100">
                  {name}
                </button>
              );
            })
          )}
        </div>
      </section>
      <section className="flex gap-4 flex-wrap p-5 border border-indigo-600 w-full">
        {products.map(({ id, ...props }) => {
          return <DrugCard key={id} id={id} {...props} />;
        })}
      </section>
    </div>
  );
};

export default ShopPage;
