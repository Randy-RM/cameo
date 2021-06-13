
let ButtonOutLine = (props) => {
    return (
        <>
            <div className="text-center text-white fw-bold py-1">
                <p>
                    <button
                        className="btn btn-lg btn-outlin-orang"
                        onClick={() => props.handleClick(props.movieId)}>
                        {props.buttonText}
                    </button>
                </p>
            </div>
        </>
    );
};

export default ButtonOutLine;

//onClick={() => props.handleClickMovieCard(props.movieId, "movie")}