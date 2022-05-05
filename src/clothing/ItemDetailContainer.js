import React, { useEffect, useState } from "react";
// data
import { productList } from "../data/dataProduct";
// item details
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [items, setItem] = useState({});
  const [loading, setLoading] = useState(true);

  const { itemId } = useParams();

  console.log(itemId);

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

  // return

  //   loading ? <h2>CARGANDO...</h2> : <ItemDetail {...items}></ItemDetail>;
  // <div>
  //   {items ? (
  //     <ItemDetail products={items} />
  //   ) : (
  //     <p> Obteniendo productos...</p>
  //   )}
  {
    /* {items.map((i) => (
        <ItemDetail key={i.id} data={i} />
      ))} */
  }

  {
    /* {items.map((r) => (
      <ItemDetail {...items} />
       ))} */
  }
  // </div>

  return loading ? <h2>CARGANDO...</h2> : <ItemDetail {...items} />;
};
export default ItemDetailContainer;
