import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FaUtensils } from "react-icons/fa";
import { Link } from 'react-router-dom';


function Header(){
    return(
        <>
        
          <div className='bg_color sticky-top' >
            
          <Navbar collapseOnSelect expand="lg">
      <Container>
         <Navbar.Brand href="#home">
        <h1 style={{color:'#FEA116', fontSize:'40px'}}>
          <FaUtensils className='pe-3 mt-0 fs-1' style={{fontSize:'50px'}}/>Restoran
        </h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className='ms-auto'>
            <Nav.Link href="" className=''>
            <Link to='' className='pe-3 text-white fw-medium menu active_sec'>HOME</Link>
            </Nav.Link>
            <Nav.Link href="" className=''>
             <Link to='about' className='pe-3 text-white fw-medium menu'>ABOUT</Link>
            </Nav.Link>
            <Nav.Link href="" className=''>
            <Link to='services' className='pe-3 text-white fw-medium menu'>SERVICE</Link>
             
              </Nav.Link>
            <Nav.Link href="" className=''>
            <Link to='menu' className='pe-3 text-white fw-medium menu'>MENU</Link>
              </Nav.Link>
            <NavDropdown title="PAGES" id="collapsible-nav-dropdown" className='pe-3 fw-medium menu'>
              
                        <NavDropdown.Item href="">
                          <Link to='booking' className='dropdown-item'>Booking</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="">
                          <Link to='team' className='dropdown-item'>Our Team</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="">
                          <Link to='test' className='dropdown-item'>Testimonial</Link>
                        </NavDropdown.Item>
                      
            </NavDropdown>
            <Nav.Link href="" className=''>
            <Link to='contact' className='pe-3 text-white fw-medium menu'>CONTACT</Link>
              </Nav.Link>
            <Button variant="primary" className='ms-4 ps-4 pe-4 fs-5 fw-medium btn border-0 rounded-0'>BOOK A TABLE</Button>{' '}
          </Nav>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
    </div>    
      
        </>
    );
}

export default Header;