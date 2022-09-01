import { Link, useLocation } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropDown from 'react-bootstrap/NavDropdown';
import Logo from '../images/logo.png';
import './../App.scss';

const Topbar = () => {
  const currentLink = useLocation();
  return (
    <Navbar bg='white' expand='lg'>
      <Container>
        <Link to='/'>
          <Navbar.Brand>
            <img
              src={Logo}
              className='imgLogo rounded'
              alt='Accessibility trial logo' />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-content" />
        <Navbar.Collapse id='navbar-content'>
          <Nav className="ms-auto">
            <Link to='/' className={currentLink.pathname === '/' ? `navTopCommonStyle nav-active` : 'navTopCommonStyle nav-inactive'}>
              Home
            </Link>
            <Link to='/about' className={currentLink.pathname === '/about' ? `navTopCommonStyle nav-active` : 'navTopCommonStyle nav-inactive'}>
              About
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topbar;