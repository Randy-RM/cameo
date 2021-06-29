import Star from "../star/Star.jsx";
import CardPlaceholder from "../../dist/assets/media_card_placeholder.jpg";

let MediaCard = (props) => {
  let { id, poster_path, vote_average } = props.media;

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
      <div className="col-6 col-md-3 col-lg-3 p-3 my-1">
        <div
          className="card-film text-white"
          onClick={() => props.handleClickMediaCard(id, props.cardType)}
        >
          <div className="text-center">
            <div className="card-overlay">
              <p className="card-img py-2">
                <img
                  src={
                    poster_path != null
                      ? `${sourceImage}${poster_path}`
                      : CardPlaceholder
                  }
                  alt={props.children}
                />
              </p>
              <div className="overlay rounded">
                <p className="card-text-overlay">See more</p>
              </div>
            </div>
            <h3 className="h5 text-center">{props.children}</h3>
            <p className="fw-bold">
              <span className="text-deep-saffron">
                Ratings :{" "}
                {movieStars.map((star) => {
                  return star;
                })}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default MediaCard;
