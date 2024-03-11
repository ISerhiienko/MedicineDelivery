import axios from "axios";
import { useEffect, useState } from "react";
import DrugCard from "../components/DrugCard.jsx";

const ShopPage = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(false);
  const [drugs, setDrugs] = useState([]);
  const [active, setActive] = useState();

  const fetchStores = () => {
    axios
      .get(import.meta.env.VITE_SERVER_DOMAIN + "/get-stores")
      .then(async ({ data }) => {
        setStores(data);
        setDrugs(data[0].drugs);
        setActive(data[0].id);
        setLoading(true);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  const fetchDrugsList = (id) => {
    const store = stores.filter((item) => item.id === id);
    setDrugs(store[0].drugs);
    setActive(store[0].id);
  };

  useEffect(() => {
    fetchStores();
  }, []);

  console.log(active);

  return (
    <div className="container flex gap-3">
      <section className="p-5 border border-indigo-600">
        <h1 className="mb-5 text-xl font-medium text-center">Shops:</h1>

        <div className="shop-list flex flex-col w-[170px]">
          {!loading ? (
            <p>loading... </p>
          ) : (
            stores.length &&
            stores.map(({ id, name }) => {
              return (
                <button
                  key={id}
                  className={`mb-5 bg-indigo-100 ${id === active ? "bg-indigo-400 text-cyan-50" : ""}`}
                  onClick={() => fetchDrugsList(id)}
                >
                  {name}
                </button>
              );
            })
          )}
        </div>
      </section>
      <section className="flex gap-4 flex-wrap p-5 border border-indigo-600 w-full">
        {drugs.length &&
          drugs.map(({ id, ...props }) => {
            return <DrugCard key={id} id={id} {...props} />;
          })}
      </section>
    </div>
  );
};

export default ShopPage;
