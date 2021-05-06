import logoCameo from "../../dist/assets/cameo_logo.png";
import { Link } from "react-router-dom";

let Footer = () => {

    return (
        <>
            <footer>

                <div className="bg-pine-tree text-light">
                    <div className="py-5">
                        <div className="container py-5">

                            <div className="">

                                <div id="footer" className="row py-3">

                                    <div className="col-md-12">
                                        <p className="display-4 text-center">
                                            <Link className="" to="/home">
                                                <img className="img-responsive logo-footer" src={logoCameo}
                                                    alt="logo RM" />
                                            </Link>
                                            <br />
                                            <span className="text-deep-saffron h2 fw-bold">Cameo</span>
                                        </p>
                                        <br />
                                        <div>
                                            <h4 className="fw-bold text-center">Contact</h4>
                                        </div>
                                        <p className="h4 text-center py-2">
                                            randymuhema@gmail.com
                                        </p>
                                        <p className="text-center py-4">
                                            copyright &copy; 2021
                                        </p>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>

            </footer>
        </>
    );
};

export default Footer;