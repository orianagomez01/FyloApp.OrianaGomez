// import logo from "./logo.svg";
import "./App.scss";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <ItemListContainer name="Oriana"></ItemListContainer>
    </div>
  );
}

export default App;
