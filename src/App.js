import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar";
import Router from "./components/router";
import Context from "./context";
import { useEffect, useState } from "react";

function App() {
  const [pizzas, setPizzas] = useState([]);
  const globalState = { pizzas, setPizzas };

  useEffect(() => {
    fetch("/pizzas.json")
      .then((response) => response.json())
      .then((data) =>
        setPizzas(
          data.map((val) => {
            return { ...val, favorito: false };
          })
        )
      );
  }, []);

  return (
    <Context.Provider value={globalState}>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;