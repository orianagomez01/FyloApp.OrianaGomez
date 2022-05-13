import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./clothing/ItemDetailContainer";
import CartContextProvider, { CartContext } from "./context/CartContext";
import { useState } from "react";
import AppContextProvider from "./context/AppContext";

function App() {
  // const [CartContext, setCartContext] = useState(false);

  return (
    <div className="App">
      <AppContextProvider>
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
                element={<ItemListContainer />}
              />

              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </BrowserRouter>
        </CartContextProvider>
      </AppContextProvider>
    </div>
  );
}

export default App;
