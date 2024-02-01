import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
function NavBar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Jet Care</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="m-auto">

                {/* 1 */}
              <NavDropdown title="Car Care" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Engine Cleaner</NavDropdown.Item>


                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.2">
                    tayer shine
                  </NavDropdown.Item>

                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.3">dash board shiner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    fabric cleaner
                  </NavDropdown.Item>
                  <NavDropdown.Divider />

                  <NavDropdown.Item href="#action/3.3">wax cleaner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">engine degreaser</NavDropdown.Item>
                  
              </NavDropdown>



                {/* 2 */}
                <NavDropdown title="Stain Remover" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Ink Remover</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Rust Remover
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Oil Remover</NavDropdown.Item>
                  
              
                </NavDropdown>

                {/* 3 */}
                <NavDropdown title="Air Freshner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Paper air Freshner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                   A.C air Freshner
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">Splash Air Freshner</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Anti tobacco
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                   Anti bactarial
                  </NavDropdown.Item>
                </NavDropdown>


                <NavDropdown title="Metal Cleaner" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Rust Remover</NavDropdown.Item>
                  
                  
                </NavDropdown>




                <Nav.Link href="#home">Tools</Nav.Link>
                <Nav.Link href="#link">About Us</Nav.Link>
                <Nav.Link href="#link">Contanct Us</Nav.Link>
                
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }

export default NavBar
