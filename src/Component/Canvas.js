import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaCartShopping } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary mx-3">
      <Container fluid>
        <Navbar.Brand href="#">Shop@24</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">About</Nav.Link>
        
          </Nav>
          <Form className="d-flex me-auto">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 border border-2 border-info"
              aria-label="Search">
            </Form.Control>
            <Button variant="outline-info"><FaSearch className='fs-4'/></Button>
          </Form>
        <FaCartShopping className='fs-2'/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample