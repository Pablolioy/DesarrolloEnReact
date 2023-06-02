import {Button, Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Pelicula({ info }) {
    return (
        <Col key={info.id}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={info.Poster} />
                <Card.Body>
                    <Card.Title>{info.Title}</Card.Title>
                    <Button as={Link} to={`/pelicula/${info.imdbID}`} variant="primary">Ver Detalle</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Pelicula