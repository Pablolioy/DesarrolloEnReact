
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"


// Components
import Navegador from './componentes/Navegador'

//Pages
import Home from './Pages/Home';
import PeliculaDetalle from './Pages/PeliculaDetalle';
import Registro from './Pages/Registro';
import Login from './Pages/Login';

//Bootstrap
import { Container } from 'react-bootstrap';

const styles = {
  container: {
    marginTop: "20px"
  },
}


function App() {
  return (
    <div className="App">
      <Router>
        <Navegador />
        <Container style={styles.container}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/registro' element={<Registro />}></Route>
            <Route path='/login' element={<Login />}></Route>
            <Route path='/pelicula/:id' element={<PeliculaDetalle />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;