import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pagination from './Pagination';
import ContentRender from './ContentRender';
const LandingPage = () => {
  return (
    <Row>
      <ContentRender />
    </Row>
  );
}
export default LandingPage;