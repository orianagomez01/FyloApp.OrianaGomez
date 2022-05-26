import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./clothing/ItemDetailContainer";
import CartContextProvider from "./context/CartContext";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";

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

            <Route path="*" element={<Navigate to="/" />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
