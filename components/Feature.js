import './Feature.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Feature = () => (
  <div className="container">
    <img className="image" src="/me.jpg" alt="Climbing MT Index" />
    <Jumbotron fluid>
      <Container>
        <h1>Fluid jumbotron</h1>
        <p>
          This is a modified jumbotron that occupies the entire horizontal space of
          its parent.
        </p>
      </Container>
    </Jumbotron>
  </div>
);

export default Feature;
