import './App.scss';
import Topbar from './component/Topbar';
import GlobalRouter from './router';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  return (
    <main>
      <Container>
        <Row>
          <Topbar />
        </Row>
        {
          location.pathname !== '/about' && <Row className='mt-4 '>
            <Col md={{ span: 12 }}>
              <h2 className='fw-bold'>
                The Trials
              </h2>
            </Col>
          </Row>
        }

        <GlobalRouter />
      </Container>
    </main>
  );
}

export default App;
