import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { getAllItems, getItemByCategory } from "../firebase/ItemCollection";

// import { productList } from "../data/dataProduct";
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

  // useEffect(() => {
  //   setLoading(true);
  //   const getProducts = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       const myData = productId
  //         ? productList.filter((item) => item.category === productId)
  //         : productList;

  //       resolve(myData);
  //       // reject('error en la promesa')
  //     }, 2000);
  //   });

  //   getProducts
  //     .then((result) => {
  //       console.log("Se completó la promesa", result);
  //       setProduct(result);
  //     })
  //     .catch((err) => {
  //       console.log("hubo un error", err);
  //     })
  //     .finally(() => setLoading(false));

  //   console.log("Se terminó el efecto");

  //   // ItemCollection.then((promise) => {
  //   //   setProduct(promise);
  //   // });
  // }, [productId]);

  return loading ? (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
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
