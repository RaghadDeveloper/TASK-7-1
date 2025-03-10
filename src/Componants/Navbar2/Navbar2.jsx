import './Navbar2.css'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { CiSearch } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/images/logo.svg'
import plane from '../../assets/images/plane.webp'

export default function Navbar2() {
  const navigate = useNavigate();
  const handleClick = (path)=>{
    navigate(`/${path}`)
  }
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary position-fixed z-3 w-100">
      <img src={plane} alt="" width={'70px'} className='d-none d-lg-flex'/>
      <Container>
        <Navbar.Brand href="/"><img src={logo} alt="logo" width={'150px'}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
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
            <Nav.Link onClick={() => handleClick("About")}>About</Nav.Link>
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
            <Nav.Link onClick={() => handleClick("Contact")}>Contact</Nav.Link>
          </Nav>
          <Nav className='nav23 d-flex justify-content-center align-items-center gap-3'>
            <CiSearch className='fs-3 d-block'/>
            <div className='btn-bg'>
            <Button className='nav2-btn rounded-pill d-flex justify-content-center align-items-center gap-2 px-3'>GET A QUOTE <FaArrowRight /> </Button>
            </div>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
