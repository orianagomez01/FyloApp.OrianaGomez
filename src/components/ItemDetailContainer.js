import { useEffect, useState } from "react";
// import { robotsData } from "../../data/robotsData"
// import RobotCard from "./RobotCard";

import { productList } from "../data/dataProduct";
import ItemCard from "./ItemCard";

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
        resolve(productList);
      }, 2000);
    });
  };

  // const RobotsContainer = () => {
  //   const [robots, setRobots] = useState([]);
  //   const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     getRobots().then((data) => {
  //       setRobots(data);
  //       setLoading(false);
  //     });
  //   }, []);

  //   const getRobots = () => {
  //     return new Promise((resolve, reject) => {
  //       setTimeout(() => {
  //         resolve(robotsData);
  //       }, 2000);
  //     });
  //   };

  return (
    <div>
      {items.map((r) => (
        <ItemCard key={r.id} data={r} />
      ))}
    </div>
  );
};
export default ItemDetailContainer;
