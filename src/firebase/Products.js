import React from "react";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    // getProducts();
    console.log("state" + products);
  }, [products]);

  const getProducts = () => {
    const db = getFirestore();
    const itemsCollection = doc(db, "items");
    getDocs(itemsCollection).then((result) => {
      if (result.exists()) {
        console.log(result);
        setProducts(result.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      }
    }, []);
  };

  return <div>Products</div>;
};

export default Products;
