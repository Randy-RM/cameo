import React from "react";
import CardMovie from "../card_movie/CardMovie.jsx";

let MoviesSection = (props) => {

    return (
        <>
            <div className={props.backgroundColor}>
                <div className="container py-5">
                    <div className="row featurette py-3">
                        {
                            props.movies.map((movie) => {
                                return (
                                    <CardMovie
                                        movie={movie}
                                        key={movie.id}
                                        genres={props.genres}
                                        handleClickMovieCard={props.handleClickMovieCard}
                                    />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default MoviesSection;