import React, { useEffect, useState } from "react";
import { getItem } from "../firebase/ItemCollection";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = () => {
  const [items, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  useEffect(() => {
    setLoading(true);

    getItem(itemId)
      .then((res) => {
        setItem(res);
      })
      .finally(() => setLoading(false));

    console.log("termina el efecto de itemDetail");
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
