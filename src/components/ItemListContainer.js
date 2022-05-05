import React from "react";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { productList } from "../data/dataProduct";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProducts = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(productList);
        // reject('error en la promesa')
      }, 2000);
    });

    getProducts
      .then((result) => {
        console.log("Se completó la promesa", result);
        setProduct(result);
      })
      .catch((err) => {
        console.log("hubo un error", err);
      });

    console.log("Se terminó el efecto");
  }, []);

  return (
    <>
      <div className="greeting">
        <h1 className="greeting__text">Bienvenidx {props.name}</h1>
      </div>

      <div className="greeting">
        <h2>Nuestros productos</h2>

        <div className="">
          <button>Indumentaria de mujeres</button>
        </div>
        <div className="">
          <Link to={`/clothing/ItemDetailContainer`}>
            <button>Indumentaria de hombres</button>
          </Link>
        </div>

        <ItemList products={product} />
      </div>
    </>
  );
};

export default ItemListContainer;
