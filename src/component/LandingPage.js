import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from './Pagination';
import ContentRender from './ContentRender';
const LandingPage = () => {
  return (
    <Container>
      <Row className='mt-4 '>
        <Col md={{ span: 12 }}>
          <h2 className='fw-bold'>
            The Trials
          </h2>
        </Col>
      </Row>
      <Row>
        <ContentRender />
      </Row>
    </Container>
  );
}
export default LandingPage;