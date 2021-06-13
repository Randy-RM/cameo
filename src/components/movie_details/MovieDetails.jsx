import { UseFetchDataAsync } from "../personal_hooks/UseFetchDataAsync.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import TrailerModal from "../trailer_modal/TrailerModal.jsx";
import StyledHero from "../styled_hero/StyledHero.jsx";
import HeroLoader from "../styled_hero/HeroLoader.jsx";
import MediaCardDetails from "../media_card/MediaCardDetails.jsx";
import MediaCardDetailsLoader from "../media_card/MediaCardDetailsLoader.jsx";
import MetaTitle from "../metaTitle/MetaTitle.jsx";

let MovieDetails = () => {
  let { movieId } = useParams();

  const apiUrl = "https://api.themoviedb.org";
  const movieDetailsUrl = `${apiUrl}/3/movie/${movieId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const movieCreditsUrl = `${apiUrl}/3/movie/${movieId}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  const movieTrailerUrl = `${apiUrl}/3/movie/${movieId}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
  const sourceImage = "https://image.tmdb.org/t/p/original/";
  const sourceProfile = "https://image.tmdb.org/t/p/w185/";

  let {
    data: movieDetails,
    isPending: isPendingMovieDetails,
    error: errorMovieDetails,
  } = UseFetchDataAsync(movieDetailsUrl);

  let {
    data: movieCredits,
    isPending: isPendingMovieCredits,
    error: errorMovieCredits,
  } = UseFetchDataAsync(movieCreditsUrl);

  let {
    data: movieTrailers,
    isPending: isPendingMovieTrailers,
    error: errorMovieTrailers,
  } = UseFetchDataAsync(movieTrailerUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {window.scrollTo(0, 0)}
      <div>
        {errorMovieDetails && (
          <div className="h1 text-center text-deep-saffron">
            {errorMovieDetails}
          </div>
        )}
        {isPendingMovieDetails && (
          <HeroLoader backgroundColor="bg-pine-tree" StylizedFor="details" />
        )}
        {movieDetails && (
          <>
            <MetaTitle
              title={
                movieDetails.title.length > 25
                  ? `Cameo - ${movieDetails.title.slice(0, 25)} ... details`
                  : `Cameo - ${movieDetails.title} details`
              }
            />
            <StyledHero
              backgroundimage={
                movieDetails.backdrop_path &&
                `${sourceImage}${movieDetails.backdrop_path}`
              }
              title={movieDetails.title}
            >
              {errorMovieTrailers && (
                <div className="h4 text-center text-deep-saffron">
                  {errorMovieTrailers}
                </div>
              )}
              {isPendingMovieTrailers && "Loading..."}
              {movieTrailers && movieTrailers.results.length > 0 && (
                <TrailerModal trailers={movieTrailers} />
              )}
              <div className="container my-4">
                <div className="row">
                  <div className="col-md-12 text-center fw-bolder text-deep-saffron h5">
                    {movieDetails.genres.map((genre) => {
                      return (
                        <span
                          className="badge badge-pill text-pine-tree bg-deep-saffron m-1"
                          key={genre.id}
                        >{`${genre.name}`}</span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </StyledHero>
          </>
        )}
      </div>
      <div className="bg-pine-tree">
        <div className="container">
          <div className="row featurette">
            {errorMovieDetails && (
              <div className="h1 text-center text-deep-saffron">
                {errorMovieDetails}
              </div>
            )}
            {isPendingMovieDetails && <MediaCardDetailsLoader />}
            {movieDetails && (
              <MediaCardDetails media={movieDetails}>
                {movieDetails.title}
              </MediaCardDetails>
            )}

            <div className="col-md-7 p-3 my-2">
              <div className="text-light">
                <h2 className="my-1 display-6 fw-bold">
                  {errorMovieDetails && (
                    <div className="text-deep-saffron">{errorMovieDetails}</div>
                  )}
                  {isPendingMovieDetails && "Loading..."}
                  {movieDetails && <>{movieDetails.title} synopsis</>}
                </h2>
                <p className="my-1 h4">
                  {errorMovieDetails && (
                    <div className="text-deep-saffron">{errorMovieDetails}</div>
                  )}
                  {isPendingMovieDetails && "Loading..."}
                  {movieDetails && <>{movieDetails.overview}</>}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-kombu-green text-light py-4">
        <div className="container">
          <div className="row">
            <p className="col-md-12 my-3 display-6 fw-bold text-center">
              Credits
            </p>
          </div>
          <div className="row">
            {errorMovieCredits && (
              <div className="h4 text-center text-deep-saffron">
                {errorMovieCredits}
              </div>
            )}
            {isPendingMovieCredits && (
              <div className="h4 text-center">Loading...</div>
            )}
            {movieCredits && (
              <>
                {movieCredits.cast.map((actor) => {
                  return (
                    actor.profile_path && (
                      <div key={actor.id} className="col-6 col-md-2 p-2">
                        <p className="text-center">
                          <img
                            src={`${sourceProfile}${actor.profile_path}`}
                            className="img-thumbnail"
                            alt={actor.name}
                          />
                        </p>
                        <p className="text-center">
                          {actor.name}
                          <br />
                          <span className="text-deep-saffron"> As </span>
                          <br />
                          {actor.character}
                        </p>
                      </div>
                    )
                  );
                })}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
