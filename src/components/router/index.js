import { Route, Routes } from "react-router-dom";
import Home from "../home";
import Carrito from "../carrito";
import PizzaDetailsPage from "../pizza/PizzaDetailsPage";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrito" element={<Carrito />} />
      <Route path="/pizzas/:id" element={<PizzaDetailsPage />} />
    </Routes>
  );
}