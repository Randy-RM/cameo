import logoCameo from "../../dist/assets/cameo_logo.png";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

let NavBarB = () => {

    return (
        <>
            <header>
                <Navbar collapseOnSelect variant="dark" fixed="top" className="bg-pine-tree" expand="lg">
                    <Container>
                        <Link className="navbar-brand" to="/home">
                            <img
                                alt=""
                                src={logoCameo}
                                width="34"
                                height="28"
                                className="d-inline-block align-top"
                            />{' '}
                            <span className="text-deep-saffron fw-bold">Cameo</span>
                        </Link>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                            <Nav>
                                <NavLink className="nav-link" to="/home">Home</NavLink>
                                <NavLink className="nav-link" to="/movies">Movies</NavLink>
                                <NavLink className="nav-link" to="/tv-show">Tv show</NavLink>
                                <NavLink className="nav-link" to="/upcoming-movies">Upcoming movies</NavLink>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </header>
        </>
    );
};

export default NavBarB;