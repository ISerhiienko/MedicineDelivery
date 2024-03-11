import axios from "axios";
import { useEffect, useState } from "react";
import DrugCard from "../components/DrugCard.jsx";

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
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />
        <DrugCard />

        <DrugCard />
      </section>
    </div>
  );
};

export default ShopPage;
