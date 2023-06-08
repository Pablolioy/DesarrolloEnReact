
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
import { useState } from 'react';

const styles = {
  container: {
    marginTop: "20px"
  },
}


function App() {

  const [login, setLogin] = useState(false);
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Router>
        <Navegador
          isLogin={login}
          setLogin={setLogin}
          user={user}
          setUser={setUser} />
        <Container fluid style={styles.container}>
          <Routes>
            <Route path='/' element={<Home isLogin={login} />}></Route>
            <Route path='/buscar/:id' element={<Home />}></Route>
            <Route path='/registro' element={<Registro />}></Route>
            <Route path='/login' element={<Login setLogin={setLogin} setUser={setUser} />}></Route>
            <Route path='/pelicula/:id' element={<PeliculaDetalle />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;