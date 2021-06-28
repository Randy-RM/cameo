import { UseFetchDataAsync } from "../personal_hooks/UseFetchDataAsync.jsx";
import { useEffect } from "react";
import imgMultiPlatformeCameo from "../../dist/assets/multi_platforme_cameo.png";
import CarouselLoader from "../carousel/CarouselLoader.jsx";
import CarouselHero from "../carousel/Carousel.jsx";
import TitledSection from "../titled_section/TitledSection.jsx";
import SectionLoader from "../section/SectionLoader.jsx";
import MediaCardLoader from "../media_card/MediaCardLoader.jsx";
import ButtonLink from "../button_link/ButtonLink.jsx";
import MetaTitle from "../metaTitle/MetaTitle.jsx";
import BouncingArrows from "../bouncingArrows/BouncingArrows.jsx";

let Home = (props) => {
  const apiUrl = "https://api.themoviedb.org";
  const upcomingMoviesUrl = `${apiUrl}/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;
  const popularMoviesUrl = `${apiUrl}/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`;
  const tvShowUrl = `${apiUrl}/3/tv/popular?api_key=${process.env.REACT_APP_API_KEY}`;

  let {
    data: sampleUpcomingMovies,
    isPending: isPendingUpcomingMovies,
    error: errorUpcomingMovies,
  } = UseFetchDataAsync(upcomingMoviesUrl, 4);

  let {
    data: samplePopularMovies,
    isPending: isPendingSamplePopularMovies,
    error: errorSamplePopularMovies,
  } = UseFetchDataAsync(popularMoviesUrl, 4);

  let {
    data: sampleTvShow,
    isPending: isPendingSampleTvShow,
    error: errorSampleTvShow,
  } = UseFetchDataAsync(tvShowUrl, 4);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {window.scrollTo(0, 0)}
      <MetaTitle title="Cameo - the best video gallery" />
      <div>
        {errorUpcomingMovies && (
          <div className="h1 text-center text-deep-saffron">
            {errorUpcomingMovies}
          </div>
        )}
        {isPendingUpcomingMovies && <CarouselLoader />}
        {sampleUpcomingMovies && (
          <CarouselHero
            mediaList={sampleUpcomingMovies}
            handleClickMediaCard={props.handleClickMediaCard}
          />
        )}
      </div>
      <div className="bg-pine-tree">
        <div className="container">
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <BouncingArrows />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pine-tree">
        <div className="container pt-5">
          <div className="row featurette py-5">
            <div className="col-md-5 thumb-post">
              <img
                className="img-responsive"
                src={imgMultiPlatformeCameo}
                alt="MultiPlatforme Cameo"
              />
            </div>
            <div className="col-md-7 text-light">
              <h2 className="featurette-heading text-deep-saffron">
                Cameo, Anytime anywhere instantly &nbsp;
                <span className="text-white-gray">See for yourself.</span>
              </h2>
              <p className="lead fw-bold">
                Anything new? Of course there is. More content here to offer you
                unforgettable moments and warm memories.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-pine-tree py-4">
        {errorSamplePopularMovies && (
          <div className="h1 text-center text-deep-saffron">
            {errorSamplePopularMovies}
          </div>
        )}
        {isPendingSamplePopularMovies && (
          <SectionLoader backgroundColor="bg-pine-tree" sectionTitle="Movies">
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
          </SectionLoader>
        )}
        {samplePopularMovies && (
          <TitledSection
            backgroundColor="bg-pine-tree"
            sectionTitle="Movies"
            mediaList={samplePopularMovies}
            cardType="movie"
            handleClickMediaCard={props.handleClickMediaCard}
          />
        )}
        <ButtonLink buttonText="More movies" href="/movies" />
      </div>
      <div className="bg-kombu-green py-4">
        {errorSampleTvShow && (
          <div className="h1 text-center text-deep-saffron">
            {errorSampleTvShow}
          </div>
        )}
        {isPendingSampleTvShow && (
          <SectionLoader
            backgroundColor="bg-kombu-green"
            sectionTitle="Tv show"
          >
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
            <MediaCardLoader />
          </SectionLoader>
        )}
        {sampleTvShow && (
          <TitledSection
            backgroundColor="bg-kombu-green"
            sectionTitle="Tv show"
            mediaList={sampleTvShow}
            cardType="tv"
            handleClickMediaCard={props.handleClickMediaCard}
          />
        )}
        <ButtonLink buttonText="More tv show" href="/tv-show" />
      </div>
    </>
  );
};

export default Home;
