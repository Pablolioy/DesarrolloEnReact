import { Form, InputGroup, Button } from 'react-bootstrap';

const styles = {
    form: {
        marginBottom: "20px",
        width: "50%",
        display: "block", 
        marginInline: "auto",
        color: "white"
    },
}

function Buscador({ handleSubmit, handleInputChange, texto }) {
    return (
        <>
            <Form onSubmit={handleSubmit} style={styles.form}>
                <InputGroup
                    className="mb-3"
                    type='text'
                    onChange={handleInputChange}
                    value={texto}
                >
                    <Form.Control
                        placeholder="Ingrese pelicula, serie o juego"
                        aria-label="Ingrese pelicula, serie o juego"
                        aria-describedby="basic-addon2"
                    />
                    <Button 
                                    variant="outline-secondary" 
                                    id="button-addon2" 
                                    type='submit'>
                        Buscar
                    </Button>
                </InputGroup>
            </Form>
        </>
    )
}

export default Buscador