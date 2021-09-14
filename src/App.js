import Countries from './Countries';
import { Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">
            Where in the World?
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Countries />
    </div>
  );
}

export default App;
