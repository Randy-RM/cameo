import imgMultiPlatformeCameo from "../../dist/assets/multi_platforme_cameo.png";
import CarouselHero from "../carousel/Carousel.jsx";
import TitledSectionMovie from "../titled_section_movie/TitledSectionMovie.jsx";
import TitledSectionTv from "../titled_section_tv/TitledSectionTV.jsx";
import ButtonOutLine from "../button_outline/ButtonOutLine.jsx";

let Home = (props) => {

    return (
        <>
            <div>
                <CarouselHero
                    carouselOfUpcomingMovies={props.carouselOfUpcomingMovies}
                    handleClickMovieCard={props.handleClickMovieCard}
                />
            </div>

            <div className="bg-pine-tree">
                <div className="container pt-5">
                    <div className="row featurette py-5">
                        <div className="col-md-5 thumb-post">
                            <img className="img-responsive" src={imgMultiPlatformeCameo} alt="" />
                        </div>
                        <div className="col-md-7 text-light">
                            <h2 className="featurette-heading text-deep-saffron">
                                Cameo, Anytime anywhere instantly &nbsp;
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

            <div className="bg-pine-tree py-4">
                <TitledSectionMovie
                    backgroundColor="bg-pine-tree"
                    sectionTitle="Movies"
                    movies={props.popularMovies}
                    handleClickMovieCard={props.handleClickMovieCard}
                />
                <ButtonOutLine buttonText="More movies" href="/movies" />
            </div>
            <div className="bg-kombu-green py-4">
                <TitledSectionTv
                    backgroundColor="bg-kombu-green"
                    sectionTitle="Tv show"
                    tvs={props.sampleTvShow}
                />
                <ButtonOutLine buttonText="More tv show" href="/tv-show" />
            </div>
        </>
    );
};

export default Home;