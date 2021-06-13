import Star from "../star/Star.jsx";
import CardPlaceholder from "../../dist/assets/media_card_placeholder.jpg";

let MediaCardDetails = (props) => {
  let { poster_path, vote_average, release_date } = props.media;

  const sourceImage = "https://image.tmdb.org/t/p/w500/";

  let starsRatings = () => {
    let stars = [];
    for (let i = 0; i < Math.floor(vote_average); i++) {
      stars.push(<Star key={i} />);
    }
    return stars;
  };

  let movieStars = starsRatings();

  return (
    <>
      <div className="col-md-4 p-3 my-2">
        <div className="card-film-detail text-light bg-deep-saffron">
          <div className="card-img h4 fw-bold text-center text-pine-tree align-middle">
            <img
              src={
                poster_path != null
                  ? `${sourceImage}${poster_path}`
                  : CardPlaceholder
              }
              alt={props.children}
            />
          </div>
        </div>
        <div className="py-2">
          <p className="text-center h4 fw-bold text-deep-saffron">
            Release date {release_date}
          </p>
        </div>
        <div className="text-center">
          <p className="h4 fw-bold text-deep-saffron">Ratings</p>
          <p className="">
            <span className="text-deep-saffron">
              {movieStars.map((star) => {
                return star;
              })}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MediaCardDetails;
