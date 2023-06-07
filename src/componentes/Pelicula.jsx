import { Card,Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Pelicula({ info }) {
const style = {
    width: '244px'  
}

    return (
        <Col key={info.id}>
            <Card as={Link} to={`/pelicula/${info.imdbID}`} style={{ style }}>
                <Card.Img style={{ style }} variant="top" src={info.Poster} />
                <Card.Body>
                    <Card.Title as={Link} to={`/pelicula/${info.imdbID}`}>{info.Title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
}

export default Pelicula