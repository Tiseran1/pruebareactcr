import { Container, Row, Col } from "react-bootstrap";
import { useContext } from "react";
import Context from "../../context";
import PizzaDetails from "../pizza/PizzaDetails";
import { useNavigate } from "react-router-dom"; // importar useNavigate


export default function Home() {
    const { pizzas, setPizzas } = useContext(Context);
    const navigate = useNavigate(); // declarar navigate
  
    const handleClick = (pizza) => {
      const newPizzas = pizzas.map((val) => {
        if (val.id === pizza.id) {
          return { ...val, favorito: true };
        }
        return val;
      });
      setPizzas(newPizzas);
    };
  
    function handleVerMasClick(id) {
        navigate(`/pizza/${id}`);
      }

    return (
      <div className="home-class">
        <Container>
          <Row className="align-items-center">
            {pizzas
              ? pizzas.map((pizza) => (
                  <Col lg={4} md={12} className="my-4" key={pizza.id}>
                    <PizzaDetails
                      pizza={pizza}
                      handleClick={handleClick}
                      handleVerMasClick={() => handleVerMasClick(pizza.id)} // pasar una función que invoque handleVerMasClick con el id de la pizza
                    />
                  </Col>
                ))
              : <p>Loading...</p>}
          </Row>
        </Container>
      </div>
    );
  }