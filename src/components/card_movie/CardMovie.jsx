import Star from "../star/Star.jsx";

let CardMovie = (props) => {

    const sourceImage = "https://image.tmdb.org/t/p/original/";

    let starsNote = () => {
        let stars = [];
        for (let i = 0; i < Math.round(props.movie.vote_average); i++) {
            stars.push(<Star key={i} />);
        }
        return stars;
    };

    let movieStars = starsNote();

    return (
        <>
            <div className="col-md-3 p-3 my-1">
                <div className="card-film text-white" onClick={() => props.handleClickMovieCard(props.movie.id)}>
                    <div className="text-center">
                        <div className="card-overlay">
                            <p className="card-img py-2">
                                <img src={`${sourceImage}${props.movie.poster_path}`} alt="" />
                            </p>
                            <div className="overlay rounded">
                                <p className="card-text-overlay">See more</p>
                            </div>
                        </div>
                        <h3 className="h4">{props.movie.title.length > 18 ? `${props.movie.title.slice(0, 18)} ...` : props.movie.title}</h3>
                        <p className="fw-bold">
                            <span className="text-deep-saffron">
                                Note : {
                                    movieStars.map((star) => {
                                        return star;
                                    })
                                }
                            </span>
                        </p>
                        <p>
                            genres
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardMovie;