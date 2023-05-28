import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

function Navegador() {
  return (
    <>
    <Navbar bg="light" expand="lg">
            <Navbar.Brand>React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link >Home</Nav.Link>
                    <Nav.Link >Registro</Nav.Link>
                    <Nav.Link>Login</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
    </Navbar>
</>
  )
}

export default Navegador