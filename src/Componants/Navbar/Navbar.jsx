import './Navbar.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";

function r_Navbar () {
  const navigate = useNavigate();
  return (
    <Navbar collapseOnSelect expand="lg" className="w-100 bg-body-tertiary m-2 px-3 rounded-pill z-3 nav position-fixed top-0">
      <Container className='d-flex justify-content-between'>
        <Navbar.Brand href="/"><img src="./../../src/assets/images/logo.svg" alt="logo" width={'150px'}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" className='border-none'/>
        <Navbar.Collapse id="responsive-navbar-nav" className='d-lg-flex justify-content-between'>
          <Nav className="m-auto">
            <NavDropdown title="Home" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  
            onClick={()=>navigate("/About")}
            >About</Nav.Link>
            <NavDropdown title="Services" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Pages" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Blog" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
            onClick={()=>navigate("/Contact")}>Contact</Nav.Link>
          </Nav>
          <Nav className='d-flex justify-content-center align-items-center gap-3'>
            <CiSearch className='fs-3 d-block'/>
            <FaShoppingCart className='fs-3 d-block primary-color'/>
            <Button className='nav-btn rounded-pill d-flex justify-content-center align-items-center gap-2 px-3'>GET A QUOTE <FaArrowRight /> </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default r_Navbar ;