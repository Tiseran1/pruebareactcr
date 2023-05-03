import { Container, Row, Col, Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useContext, useEffect, useState } from "react";
import Context from "../../context";
import './carrito.css'

export default () => {
    const { pizzas, setPizzas } = useContext(Context);
    const [favoritas, setFavoritas] = useState([]);

    useEffect(() => {
        setFavoritas(pizzas.filter((pizza) => pizza.favorito === true));
    }, [pizzas]);

    const calcularPrecioTotal = () => {
        return favoritas.reduce(
            (total, pizza) => total + pizza.price * pizza.cantidad,
            0
        );
    };

    const [precioTotal, setPrecioTotal] = useState(calcularPrecioTotal());

    const aumentarCantidad = (id) => {
        setFavoritas(
            favoritas.map((pizza) =>
                pizza.id === id ? { ...pizza, cantidad: pizza.cantidad + 1 } : pizza
            )
        );
        setPrecioTotal(calcularPrecioTotal());
    };

    const disminuirCantidad = (id) => {
        setFavoritas(
            favoritas.map((pizza) =>
                pizza.id === id
                    ? {
                        ...pizza,
                        cantidad: pizza.cantidad > 1 ? pizza.cantidad - 1 : 1,
                    }
                    : pizza
            )
        );
        setPrecioTotal(calcularPrecioTotal());
    };

    useEffect(() => {
        setPrecioTotal(calcularPrecioTotal());
    }, [favoritas]);

    const agregarAlCarrito = (pizza) => {
        setPizzas(pizzas.map((p) => (p.id === pizza.id ? { ...p, favorito: false, cantidad: 1 } : p)));
        setPrecioTotal(calcularPrecioTotal());
    };

    return (
        <div className="home-classC">
            <Container>
                <Row>
                    <Col md={8}>
                        <h2>Maravilloso carrito de compras delicioso</h2>
                        <h6> no logré que el valor se actualizara de inmediato, hay que dar ckick en - en cada pizza agregada lo siento  </h6>
                        {favoritas.length > 0 ? (
                            <ListGroup>
                                {favoritas.map((pizza) => (
                                    <ListGroupItem key={pizza.id}>
                                        <Row>
                                            <Col md={1}>
                                                <img src={pizza.img} alt={pizza.name} />
                                            </Col>
                                            <Col md={8}>
                                                <h3>{pizza.name}</h3>
                                                <p>{pizza.description}</p>
                                                <p><b>Cantidad:</b> {pizza.cantidad}</p>
                                                <Button
                                                    variant="secondary" size="sm" s  className="me-2"onClick={() => disminuirCantidad(pizza.id)}>
                                                    -
                                                </Button>
                                                <Button
                                                    variant="secondary" size="sm" className="me-2" onClick={() => aumentarCantidad(pizza.id)}>
                                                    +
                                                </Button>
                                                <Button
                                                    variant="danger" size="sm" onClick={() =>
                                                        setPizzas(
                                                            pizzas.map((p) =>
                                                                p.id === pizza.id
                                                                    ? { ...p, favorito: false } : p
                                                            )
                                                        )
                                                    }
                                                >
                                                    Eliminar
                                                </Button>
                                            </Col>
                                            <Col md={2}>
                                                <p>Precio: ${pizza.price}</p>
                                                <p><b>Precio Total:</b> ${pizza.price * pizza.cantidad}</p>
                                            </Col>
                                        </Row>
                                    </ListGroupItem>
                                ))}
                            </ListGroup>
                        ) : (
                            <p>No hay pizzas en el carrito :C</p>
                        )}
                    </Col>
                    <Col md={4}>
                        <Card>
                            <Card.Body>
                                <h3>Total: ${precioTotal}</h3>
                                <Button variant="primary">Pasar por Caja</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
