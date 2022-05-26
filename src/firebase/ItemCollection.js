import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyA4oobcFBsOwrkjgIMXbM9tzReRp9v7zmM",
  authDomain: "fylo-app-f1d8a.firebaseapp.com",
  projectId: "fylo-app-f1d8a",
  storageBucket: "fylo-app-f1d8a.appspot.com",
  messagingSenderId: "560541733453",
  appId: "1:560541733453:web:adfac2cb750fb8afcd8204",
  // apiKey: process.env.REACT_APP_APIKEY,
  // authDomain: process.env.REACT_APP_AUTHDOMAIN,
  // projectId: process.env.REACT_APP_PROJECTID,
  // storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  // appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

//TODOS LOS ITEMS
export async function getAllItems() {
  const myCollection = collection(db, "items");

  const itemCollection = await getDocs(myCollection);

  return itemCollection.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
}

//CATEGORIAS

export async function getItemByCategory(productId) {
  const myCollection = collection(db, "items");
  const q = query(myCollection, where("category", "==", productId));

  const snapData = await getDocs(q);

  return snapData.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
}

export async function getItem(id) {
  const myCollection = collection(db, "items");
  const productRef = doc(myCollection, id);
  const snapData = await getDoc(productRef);

  return {
    ...snapData.data(),
    id: snapData.id,
  };
}
