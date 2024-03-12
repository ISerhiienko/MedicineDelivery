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

  const handleSortByPrice = () => {
    const favoriteDrugs = drugs.filter((drug) => drug.fav === "true");
    const nonFavoriteDrugs = drugs.filter((drug) => drug.fav !== "true");

    const sortedFavoriteDrugs = favoriteDrugs.sort((a, b) => b.price - a.price);

    const sortedNonFavoriteDrugs = nonFavoriteDrugs.sort(
      (a, b) => b.price - a.price,
    );

    const sortedDrugs = [...sortedFavoriteDrugs, ...sortedNonFavoriteDrugs];

    setDrugs(sortedDrugs);
  };

  const handleSortByDate = () => {
    const favoriteDrugs = drugs.filter((drug) => drug.fav === "true");
    const nonFavoriteDrugs = drugs.filter((drug) => drug.fav !== "true");

    const sortedFavoriteDrugs = favoriteDrugs.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );

    const sortedNonFavoriteDrugs = nonFavoriteDrugs.sort(
      (a, b) => new Date(b.timestamp) - new Date(a.timestamp),
    );

    const sortedDrugs = [...sortedFavoriteDrugs, ...sortedNonFavoriteDrugs];

    setDrugs(sortedDrugs);
  };

  const addToFavorite = async (id) => {
    try {
      await axios.put(
        import.meta.env.VITE_SERVER_DOMAIN + `/add-favorite/${id}`,
      );

      setDrugs((prevDrugs) =>
        prevDrugs.map((drug) =>
          drug.id === id
            ? { ...drug, fav: drug.fav === "true" ? "false" : "true" }
            : drug,
        ),
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchStores();
  }, []);

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
      <section className="p-5 border border-indigo-600 w-full">
        <div className="mb-5 flex gap-5">
          <button onClick={handleSortByPrice} className="bg-gray-200">
            Sort from high to low
          </button>
          <button onClick={handleSortByDate} className="bg-gray-200">
            Sort by date
          </button>
        </div>
        <div className="flex flex-wrap gap-3">
          {drugs.length &&
            drugs.map(({ id, ...props }) => {
              return (
                <DrugCard
                  key={id}
                  id={id}
                  addToFavorite={addToFavorite}
                  {...props}
                />
              );
            })}
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
