import React, { createContext, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../data/dataProduct";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

const AppContextProvider = ({ children }) => {
  const [products, setProducts] = useState([productList]);

  //   useEffect(() => {
  //     const getProducts = new Promise((resolve, reject) => {
  //       const findData = productId
  //         ? productList.filter((item) => item.category === productId)
  //         : productList;

  //       resolve(findData);
  //     });

  //     getProducts().then((resp) => setProducts(resp));
  //   });

  return (
    <AppContext.Provider value={{ products }}>{children}</AppContext.Provider>
  );
};
export default AppContextProvider;
