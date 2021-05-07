import imgMultiPlatformeCameo from "../../dist/assets/multi_platforme_cameo.png";
import CarouselHero from "../carousel/Carousel.jsx";

let Home = () => {

    return (
        <>
            <div>
                <CarouselHero />
            </div>

            <div className="bg-pine-tree pt-5">
                <div className="container pt-5">
                    <div className="row featurette">
                        <div className="col-md-5 thumb-post">
                            <img className="img-responsive" src={imgMultiPlatformeCameo} alt="" />

                        </div>
                        <div className="col-md-7 text-light">
                            <h2 className="featurette-heading text-deep-saffron">
                                Cameo, Anytime anywhere instantly
                            <span className="text-white-gray">
                                    See for yourself.
                            </span>
                            </h2>
                            <p className="lead fw-bold">
                                Anything new? Of course there is.
                                More content here to offer you unforgettable moments and
                                warm memories.
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;