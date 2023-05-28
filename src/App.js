
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
      <Navegador/>
      <Router>
        <Container style={ styles.container }>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;