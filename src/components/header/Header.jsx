import logoCameo from "../../dist/assets/cameo_logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import { useState } from "react";

let Header = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <header>
        <Navbar
          collapseOnSelect
          variant="dark"
          fixed="top"
          className="bg-pine-tree"
          expand="lg"
          expanded={expanded}
        >
          <Container>
            <Link className="navbar-brand" to="/home">
              <img
                alt=""
                src={logoCameo}
                width="34"
                height="28"
                className="d-inline-block align-top"
              />{" "}
              <span className="text-deep-saffron fw-bold">Cameo</span>
            </Link>
            <Navbar.Toggle
              aria-controls="responsive-navbar-nav"
              onClick={() => setExpanded(expanded ? false : "expanded")}
            />
            <Navbar.Collapse
              className="justify-content-end"
              id="responsive-navbar-nav"
            >
              <Nav>
                <NavLink
                  className="nav-link"
                  to="/home"
                  onClick={() => setExpanded(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/movies"
                  onClick={() => setExpanded(false)}
                >
                  Movies
                </NavLink>
                <NavLink
                  className="nav-link"
                  to="/tv-show"
                  onClick={() => setExpanded(false)}
                >
                  Tv show
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
