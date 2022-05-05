import { useEffect, useState } from "react";
// import { robotsData } from "../../data/robotsData"
// import RobotCard from "./RobotCard";

import { productListMen } from "../data/dataProductMen";
import ItemCard from "./ItemCard";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
  const [items, setItem] = useState([]);

  useEffect(() => {
    getItems().then((data) => {
      setItem(data);
    });
  }, []);

  const getItems = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productListMen);
      }, 2000);
    });
  };

  return (
    <div className="card">
      {items.map((r) => (
        <ItemCard key={r.id} data={r} />
      ))}
    </div>
  );
};
export default ItemDetailContainer;
