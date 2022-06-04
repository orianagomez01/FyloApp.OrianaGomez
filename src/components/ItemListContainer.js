import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getAllItems, getItemByCategory } from "../firebase/ItemCollection";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  const { productId } = useParams();

  useEffect(() => {
    setLoading(true);

    if (productId === undefined) {
      getAllItems()
        .then((res) => {
          setProduct(res);
        })
        .finally(() => setLoading(false));
    } else {
      getItemByCategory(productId)
        .then((res) => {
          setProduct(res);
        })
        .finally(() => setLoading(false));
    }
  }, [productId]);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden align-items-center">Loading...</span>
    </Spinner>
  ) : (
    <>
      <div className="greeting">
        <h1 className="greeting__text">Bienvenidx {props.name}</h1>
      </div>

      <div className="greeting">
        <h2>Nuestros productos</h2>
        <ItemList products={product} />
      </div>
    </>
  );
};

export default ItemListContainer;
