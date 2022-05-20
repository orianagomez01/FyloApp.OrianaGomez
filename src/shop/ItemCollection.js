import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";

const ItemCollection = () => {
  const [items, setItems] = useState([]);
  const [itemsCategory, setItemsCategory] = useState([]);

  useEffect(() => {
    getItemCollection();
    getItemCategory();
  }, []);

  const getItemCollection = () => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    // const q = query(itemsCollection, where('category',));

    getDocs(itemsCollection).then((snapshot) => {
      if (snapshot.size > 0) {
        const itemsData = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        console.log(itemsData);
        setItems(itemsData);
      }
    });
  };

  const getItemCategory = () => {
    const db = getFirestore();

    const itemsCollection = collection(db, "items");

    const q = query(itemsCollection, where("category", "==", "categoryId"));

    getDocs(q).then((snapshot) => {
      if (snapshot.size > 0) {
        const itemsFilterData = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));

        // console.log(itemsData);
        setItemsCategory(itemsFilterData);
      }
    });
  };

  return <div>ItemCollection</div>;
};

export default ItemCollection;
