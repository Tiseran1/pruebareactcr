import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import './pizzadetailspage.css'

export default function PizzaDetailsPage() {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    async function fetchPizza() {
      const response = await fetch("/pizzas.json");
      const pizzas = await response.json();
      const pizza = pizzas.find((p) => p.id === id);
      setPizza(pizza);
    }
    fetchPizza();
  }, [id]);

  if (!pizza) {
    return <div>Cargando...</div>;
  }

  return (
<Card>
  <div className="CardDesc">
      <Card.Img variant="top" src={pizza.img} />
  <Card.Body>
    <Card.Title> <h2>{pizza.name}</h2></Card.Title>
    <hr />

    <Card.Text>

            <p>Descripción: {pizza.desc}</p>
            <hr />
      <ul>
        {pizza.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <hr />
      <p>Precio: {pizza.price}</p>
    </Card.Text>
    <Button variant="danger">Añadir al carrito</Button>
  </Card.Body>
  </div>

</Card>
  );
}