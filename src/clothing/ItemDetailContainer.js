import React, { useEffect, useState } from "react";
// data
import { productList } from "../data/dataProduct";
// item details
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = () => {
  const [items, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);
    const getItems = new Promise((resolve) => {
      setTimeout(() => {
        const findData = productList.find((item) => item.id === itemId);

        resolve(findData);
      }, 1000);
    });

    getItems
      .then((res) => {
        setItem(res);
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  ) : (
    <ItemDetail {...items} />
  );
};
export default ItemDetailContainer;
