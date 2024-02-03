import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";
import { useData } from "../../Context/DataContext";
function NavBar() {
  const data = useData();
  // console.log("navbar", data);
  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      // fixed="top"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container>
        <Link to="/" className="link d-flex align-items-center">
          <img
            alt=""
            src="/images/Background.svg"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />
          Jet Care
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            {data.map((item,index) =>
              item.subcategories ? (
                <NavDropdown
                  title={item.title}
                  id="basic-nav-dropdown"
                  key={index}
                >
                  {item.subcategories.map((sub,i) => (
                    <NavLink className="link"   to={`/categories?cate=${sub.link}&ic=${index}&is=${i}`} key={i}>
                      {sub.title}
                    </NavLink>
                  ))}
                </NavDropdown>
              ) : (
                <NavLink className="link d-flex align-items-center" to={item.to} key={index}>
                  {item.title}
                </NavLink>
              )
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
