import { UseFetchDataAsync } from "../personal_hooks/UseFetchDataAsync.jsx";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import TrailerModal from "../trailer_modal/TrailerModal.jsx";
import StyledHero from "../styled_hero/StyledHero.jsx";
import HeroLoader from "../styled_hero/HeroLoader.jsx";
import MediaCardDetails from "../media_card/MediaCardDetails.jsx";
import MediaCardDetailsLoader from "../media_card/MediaCardDetailsLoader.jsx";
import MetaTitle from "../metaTitle/MetaTitle.jsx";
import CreditActor from "../credit_actor/CreditActor.jsx";

let TvShowDetails = () => {
  let { tvShowId } = useParams();

  const apiUrl = "https://api.themoviedb.org";
  const tvShowDetailsUrl = `${apiUrl}/3/tv/${tvShowId}?api_key=${process.env.REACT_APP_API_KEY}`;
  const tvShowCreditsUrl = `${apiUrl}/3/tv/${tvShowId}/credits?api_key=${process.env.REACT_APP_API_KEY}`;
  const tvShowTrailerUrl = `${apiUrl}/3/tv/${tvShowId}/videos?api_key=${process.env.REACT_APP_API_KEY}`;
  const sourceImage = "https://image.tmdb.org/t/p/original/";
  const sourceProfile = "https://image.tmdb.org/t/p/w185/";

  let {
    data: tvShowDetails,
    isPending: isPendingTvShowDetails,
    error: errorTvShowDetails,
  } = UseFetchDataAsync(tvShowDetailsUrl);

  let {
    data: tvShowCredits,
    isPending: isPendingTvShowCredits,
    error: errorTvShowCredits,
  } = UseFetchDataAsync(tvShowCreditsUrl);

  let {
    data: tvShowTrailers,
    isPending: isPendingTvShowTrailers,
    error: errorTvShowTrailers,
  } = UseFetchDataAsync(tvShowTrailerUrl);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {window.scrollTo(0, 0)}
      <div>
        {errorTvShowDetails && (
          <div className="h1 text-center text-deep-saffron">
            {errorTvShowDetails}
          </div>
        )}
        {isPendingTvShowDetails && (
          <HeroLoader backgroundColor="bg-pine-tree" StylizedFor="details" />
        )}
        {tvShowDetails && (
          <>
            <MetaTitle
              title={
                tvShowDetails.name.length > 25
                  ? `Cameo - ${tvShowDetails.name.slice(0, 25)} ... details`
                  : `Cameo - ${tvShowDetails.name} details`
              }
            />
            <StyledHero
              backgroundimage={
                tvShowDetails.backdrop_path &&
                `${sourceImage}${tvShowDetails.backdrop_path}`
              }
              title={tvShowDetails.name}
            >
              {errorTvShowTrailers && (
                <div className="h1 text-center text-deep-saffron">
                  {errorTvShowTrailers}
                </div>
              )}
              {isPendingTvShowTrailers && "Loading..."}
              {tvShowTrailers && tvShowTrailers.results.length > 0 && (
                <TrailerModal trailers={tvShowTrailers} />
              )}
              <div className="container my-4">
                <div className="row">
                  <div className="col-md-12 text-center fw-bolder text-deep-saffron h5">
                    {tvShowDetails.genres.map((genre) => {
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
            {errorTvShowDetails && (
              <div className="h1 text-center text-deep-saffron">
                {errorTvShowDetails}
              </div>
            )}
            {isPendingTvShowDetails && <MediaCardDetailsLoader />}
            {tvShowDetails && (
              <MediaCardDetails media={tvShowDetails}>
                {tvShowDetails.name}
              </MediaCardDetails>
            )}
            <div className="col-md-7 p-3 my-2">
              <div className="text-light">
                <h2 className="my-1 display-6 fw-bold">
                  {errorTvShowDetails && (
                    <div className="text-deep-saffron">
                      {errorTvShowDetails}
                    </div>
                  )}
                  {isPendingTvShowDetails && "Loading..."}
                  {tvShowDetails && <>{tvShowDetails.name} synopsis</>}
                </h2>
                <p className="my-1 h4">
                  {errorTvShowDetails && (
                    <div className="text-deep-saffron">
                      {errorTvShowDetails}
                    </div>
                  )}
                  {isPendingTvShowDetails && "Loading..."}
                  {tvShowDetails && <>{tvShowDetails.overview}</>}
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
            {errorTvShowCredits && (
              <div className="h4 text-center text-deep-saffron">
                {errorTvShowCredits}
              </div>
            )}
            {isPendingTvShowCredits && (
              <div className="h4 text-center">Loading...</div>
            )}
            {tvShowCredits && (
              <>
                {tvShowCredits.cast.map((actor) => {
                  return (
                    actor.profile_path && (
                      <CreditActor
                        key={actor.id}
                        actor={actor}
                        sourceProfile={sourceProfile}
                      />
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

export default TvShowDetails;
