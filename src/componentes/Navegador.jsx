import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

function Navegador({ isLogin, setLogin, setUser, user }) {

    const handleLogout = ()=> {
        setLogin(false)
        setUser(null)
    }

    return (
        <>
            <Navbar expand="lg" style={{ backgroundColor: '#141a32', color: 'white' }}>
                <Navbar.Brand as={Link} to="/">
                    Projecto final
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{ backgroundColor: '#141a32', color: 'white' }}>
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {!isLogin && (
                            <>
                                <Nav.Link as={Link} to="/registro">Registro</Nav.Link>
                                <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            </>
                            )
                        }
                        {
                            isLogin && (
                                <Nav.Link style={{color: "white"}} onClick={handleLogout}>Salir</Nav.Link>
                            )
                        }
                    </Nav>
                </Navbar.Collapse>
                { user && (
                    <div>Hola {user.name}!</div>
                ) 
                }
            </Navbar>
        </>
    )
}

export default Navegador