import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import './NavBar.css'
function NavBar() {
    return (
        <Navbar fixed='top' expand="lg" className="bg-body-tertiary">
          <Container>
          <NavLink to="/" className='link'>
            <img
              alt=""
              src="/images/Background.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Jet Care
          </NavLink>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">

                {/* 1 */}
              <NavDropdown title="Car Care" id="basic-nav-dropdown">
                  <NavLink  className='link' to="#action/3.1">Engine Cleaner</NavLink>


                  <NavDropdown.Divider />

                  <NavLink  className='link' to="#action/3.2">
                    tayer shine
                  </NavLink>

                  <NavDropdown.Divider />

                  <NavLink  className='link' to="#action/3.3">dash board shiner</NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.4">
                    fabric cleaner
                  </NavLink>
                  <NavDropdown.Divider />

                  <NavLink  className='link' to="#action/3.3">wax cleaner</NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.3">engine degreaser</NavLink>
                  
              </NavDropdown>



                {/* 2 */}
                <NavDropdown title="Stain Remover" id="basic-nav-dropdown">
                  <NavLink  className='link' to="#action/3.1">Ink Remover</NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.2">
                    Rust Remover
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.3">Oil Remover</NavLink>
                  
              
                </NavDropdown>

                {/* 3 */}
                <NavDropdown title="Air Freshner" id="basic-nav-dropdown">
                  <NavLink  className='link' to="#action/3.1">Paper air Freshner</NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.2">
                   A.C air Freshner
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.3">Splash Air Freshner</NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.4">
                    Anti tobacco
                  </NavLink>
                  <NavDropdown.Divider />
                  <NavLink  className='link' to="#action/3.4">
                   Anti bactarial
                  </NavLink>
                </NavDropdown>


                <NavDropdown title="Metal Cleaner" id="basic-nav-dropdown">
                  <NavLink  className='link' to="#action/3.1">Rust Remover</NavLink>
                  
                  
                </NavDropdown>




                <NavLink className='link' to="#home">Tools</NavLink>
                
                  <NavLink className='link' to='/about'>
                  About Us</NavLink>
              
                <NavLink className='link' to="/contact">Contanct Us</NavLink>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar
