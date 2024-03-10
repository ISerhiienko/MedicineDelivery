import axios from "axios";
import { useEffect, useState } from "react";

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
    <div className="container flex">
      <div className="shop-list flex flex-col">
        {!loading ? (
          <p>loading... </p>
        ) : (
          stores.length &&
          stores.map(({ id, name }) => {
            return (
              <button key={id} className="mb-5">
                {name}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ShopPage;
