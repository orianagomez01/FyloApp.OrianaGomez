import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { productList } from "../data/dataProduct";

const itemDetail = () => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});

  useEffect(() => {
    (async () => {
      const itemData = await getClothesDetail();
      if (itemData) {
        setItem(itemData);
      }
    })();
  }, [itemId]);

  const getClothesDetail = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productList.find((r) => r.id == itemId));
      }, 2000);
    });
  };

  return (
    <>
      <div>Probando {itemId}</div>
      <strong className="">{item.id}</strong>
      <strong className="">{item.name}</strong>
      <div className="">
        <Link to="/components/1">Bender</Link>
      </div>
    </>
  );
};

export default itemDetail;
