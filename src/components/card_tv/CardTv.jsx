import Star from "../star/Star.jsx";

let CardTv = (props) => {

    const sourceImage = "https://image.tmdb.org/t/p/original/";

    let starsNote = () => {
        let stars = [];
        for (let i = 0; i < Math.round(props.tv.vote_average); i++) {
            stars.push(<Star key={i} />);
        }
        return stars;
    };

    let tvStars = starsNote();

    return (
        <>
            <div className="col-md-3 p-3 my-1">
                <div className="card-film text-white" onClick={() => props.handleClickTvShowCard(props.tv.id)}>
                    <div className="text-center">
                        <div className="card-overlay">
                            <p className="card-img py-2">
                                <img src={`${sourceImage}${props.tv.poster_path}`} alt="" />
                            </p>
                            <div className="overlay rounded">
                                <p className="card-text-overlay">See more</p>
                            </div>
                        </div>
                        <h3 className="h4">{props.tv.name.length > 18 ? `${props.tv.name.slice(0, 18)} ...` : props.tv.name}</h3>
                        <p className="fw-bold">
                            <span className="text-deep-saffron">
                                Note : {
                                    tvStars.map((star) => {
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

export default CardTv;