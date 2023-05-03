import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './pizzadetails.css'
export default function PizzaDetails({ pizza, handleClick }) {
  const navigate = useNavigate();

  function handleVerMasClick(id) {
    navigate(`/pizzas/${id}`);
  }

  // Comprobar  que pizza no sea undefined antes
  if (!pizza) {
    return null; 
  }

  return (
    <div className="cardM">
      <Card>
        <Card.Img variant="top" src={pizza.img} />
        <Card.Body>
          <Card.Title><h2>{pizza.name}</h2></Card.Title>
          <Card.Text>
            <hr />
            <ul>
              {pizza.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
            <hr />
            <p>Precio:<strong>{pizza.price}</strong> </p>
          </Card.Text>
          <Button variant="danger" onClick={() => handleClick(pizza)}>
            Añadir al carrito
          </Button>
          <Button variant="success" onClick={() => handleVerMasClick(pizza.id)}>
            Ver más
          </Button>
        </Card.Body>
      </Card>

    </div>

  );
}