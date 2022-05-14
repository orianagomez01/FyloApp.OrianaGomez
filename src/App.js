import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ItemDetailContainer from "./clothing/ItemDetailContainer";
import { CartContext } from "./context/CartContext";

function App() {
  return (
    <div className="App">
      <CartContext.Provider>
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
      </CartContext.Provider>
    </div>
  );
}

export default App;
