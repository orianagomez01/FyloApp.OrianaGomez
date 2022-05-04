// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* capaz de encontrar la ruta de navbar */}
        <NavBar></NavBar>
        {/* va a utilizar lo que definamos como rutas */}
        <Routes>
          {/* definir lo q vamos a poner en el home */}
          <Route
            path="/"
            element={<ItemListContainer name="Oriana"></ItemListContainer>}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
