import logoCameo from "../../dist/assets/cameo_logo.png";
import { NavBar } from "react-bootstrap";

let Header = () => {

    return (
        <>
            <header>
                <nav id="navbar" className="navbar navbar-dark navbar-expand-lg fixed-top bg-pine-tree"
                    aria-label="Ninth navbar example">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img className="img-responsive d-inline-block align-text-top" width="34" height="28"
                                src={logoCameo} alt="logo RM" />
                            <span className="text-deep-saffron fw-bold">Cameo</span>
                        </a>
                        <button className="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#dynamicNavBar" aria-controls="dynamicNavBar" aria-expanded="false"
                            aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-end" id="dynamicNavBar">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" href="#">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Movies
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Tv show
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                        Upcoming movies
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;