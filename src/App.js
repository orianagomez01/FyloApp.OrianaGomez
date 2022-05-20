import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./clothing/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import ItemCollection from "./shop/ItemCollection";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
      <CartContextProvider>
        <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer name="Oriana"></ItemListContainer>}
            />

            <Route path="/items/:itemId" element={<ItemDetailContainer />} />

            <Route
              path="/category/:productId"
              element={<ItemListContainer name="Oriana" />}
            />
            <Route path="/itemCollection" element={<ItemCollection />} />

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
