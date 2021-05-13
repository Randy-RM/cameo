import Star from "../star/Star.jsx";
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";
import TrailerModal from "../trailer_modal/TrailerModal.jsx"

const StyledHero = styled('div')`
background : linear-gradient(0deg, rgba(34, 49, 39, 1), rgba(34, 49, 39, 0.4)), url("${({ backgroundImg }) => backgroundImg}");
background-size:cover;
background-position:center;
`

let MovieDetails = () => {

    let [movieDetails, setMovieDetails] = useState([]);
    let [movieCredits, setMovieCredits] = useState([]);
    let [movieTrailers, setMovieTrailers] = useState([]);
    let { movieId } = useParams();
    const apiKey = "54476c52f6659a1c87aca096a4365b14";
    const movieDetailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;
    const movieCreditsUrl = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;
    const movieTrailerUrl = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}`;
    const sourceImage = "https://image.tmdb.org/t/p/original/";
    const movieDetailsApiUrls = [movieDetailsUrl, movieCreditsUrl, movieTrailerUrl];

    let starsRatings = () => {
        let stars = [];
        for (let i = 0; i < Math.floor(movieDetails.vote_average); i++) {
            stars.push(<Star key={i} />);
        }
        return stars;
    };

    let movieStars = starsRatings();

    useEffect(() => {
        async function fetchMovieDetails() {
            try {
                await Promise.all(movieDetailsApiUrls.map((url) =>
                    fetch(url)
                        .then(
                            (response) => {
                                return response.json();
                            }
                        )
                )).then((data) => {
                    setMovieDetails(data[0]);
                    setMovieCredits(data[1].cast);
                    setMovieTrailers(data[2]);
                })
            } catch (error) {

            }
        }
        fetchMovieDetails();
        window.scrollTo(0, 0);
    }, []);
    //console.log(movieTrailers)
    return (
        <>
            <div className="">
                <StyledHero backgroundImg={`${sourceImage}${movieDetails.backdrop_path}`}
                    className="hero text-light">
                    <div className="container py-5 mt-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-10 col-lg-8">
                                <h1 className="text-center size-hero">{movieDetails.title}</h1>
                            </div>
                            <div className="col-12 col-md-10 col-lg-8">
                                <TrailerModal movieTrailers={movieTrailers} />
                            </div>
                        </div>
                    </div>
                </StyledHero>
            </div>

            <div className="bg-pine-tree">
                <div className="container">

                    <div className="row featurette">

                        <div className="col-md-4 p-3 my-2">
                            <div className="card-film-detail text-light">
                                <div className="card-img text-center">
                                    <img src={`${sourceImage}${movieDetails.poster_path}`} alt="" />
                                </div>
                            </div>
                            <div className="py-2">
                                <p className="text-center h4 fw-bold text-deep-saffron">
                                    Release date {movieDetails.release_date}
                                </p>
                            </div>
                            <div className="text-center">
                                <p className="h4 fw-bold text-deep-saffron">
                                    Ratings
                                </p>
                                <p className="">
                                    <span className="text-deep-saffron">
                                        {
                                            movieStars.map((star) => {
                                                return star;
                                            })
                                        }
                                    </span>
                                </p>
                            </div>
                        </div>


                        <div className="col-md-7 p-3 my-2">
                            <div className="text-light">
                                <h2 className="my-1 display-6 fw-bold">
                                    {movieDetails.title} synopsis
                                </h2>
                                <p className="my-1 h4">
                                    {movieDetails.overview}
                                </p>
                            </div>
                            <div className="text-light">
                                <p className="my-3 display-6 fw-bold">
                                    Credits
                                </p>
                                <p className="my-3 h4">
                                    {
                                        movieCredits.map((actor) => {
                                            return (
                                                <span key={actor.id}>
                                                    {actor.name}
                                                    <span className="text-deep-saffron"> As </span>
                                                    {actor.character}
                                                    <span className="text-deep-saffron fw-bolder">|</span>
                                                </span>
                                            );
                                        })
                                    }
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    );
};

export default MovieDetails;