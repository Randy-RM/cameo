import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarB from "./header/NavBarB.jsx";
import Footer from "./footer/Footer.jsx";
import Home from "./home/Home.jsx";
import Movies from "./movies/Movies.jsx";
import TvShow from "./tv_show/TvShow.jsx";
import UpComingMovies from "./upcoming_movies/UpComingMovies.jsx";
import MovieDetails from "./movie_details/MovieDetails.jsx";
import TvShowDetails from "./tv_show_details/TvShowDetails.jsx";

let App = () => {

    const apiKey = "54476c52f6659a1c87aca096a4365b14";
    const apiUrl = "https://api.themoviedb.org";
    // const upcomingMoviesUrl = `${apiUrl}/3/movie/upcoming?api_key=${process.env.REACT_APP_API_KEY}`;
    const upcomingMoviesUrl = `${apiUrl}/3/movie/upcoming?api_key=${apiKey}`;
    const popularMoviesUrl = `${apiUrl}/3/movie/popular?api_key=${apiKey}`;
    const tvShowUrl = `${apiUrl}/3/tv/popular?api_key=${apiKey}`
    const movieGenreUtl = `${apiUrl}/3/genre/movie/list?api_key=${apiKey}`;
    const testUrl = "https://api.themoviedb.org/3/trending/all/day?api_key=54476c52f6659a1c87aca096a4365b14";
    const homeApiUrls = [upcomingMoviesUrl, popularMoviesUrl, tvShowUrl, movieGenreUtl, testUrl];

    let history = useHistory();

    let [carouselOfUpcomingMovies, setCarouselOfUpcomingMovies] = useState([]);
    let [popularMovies, setPopularMovies] = useState([]);
    let [sampleTvShow, setSampleTvShow] = useState([]);
    let [movieGengres, setMovieGengres] = useState([]);
    let [test, setTest] = useState([]);


    async function fetchData() {
        let carouselUpcomingMoviesList = [];
        let popularMoviesList = [];
        let sampleTvShowList = [];
        let movieGengreList = [];
        try {
            await Promise.all(homeApiUrls.map((url) =>
                fetch(url).then(response => response.json())
            )).then(data => {
                for (let i = 0; i < 4; i++) {
                    carouselUpcomingMoviesList.push(data[0].results[i]);
                    popularMoviesList.push(data[1].results[i]);
                    sampleTvShowList.push(data[2].results[i]);

                }
                movieGengreList = data[3].genres.map((genre) => {
                    return genre;
                });
                setCarouselOfUpcomingMovies(carouselUpcomingMoviesList);
                setPopularMovies(popularMoviesList);
                setSampleTvShow(sampleTvShowList);
                setMovieGengres(movieGengreList);
                setTest(data[4]);
            })
        } catch (error) {
            console.error("erreur de connection");
        }
    }

    useEffect(() => {
        // eslint-disable-next-line
        fetchData();
    }, []);

    let handleClickMovieCard = (id) => {
        history.push(`/movie/details/${id}`);
    };

    let handleClickTvShowCard = (id) => {
        history.push(`/tv/details/${id}`);
    };

    //console.log(test);

    return (
        <>
            <NavBarB />

            <main>
                <Switch>
                    <Route path="/upcoming-movies">
                        <UpComingMovies />
                    </Route>
                    <Route path="/tv/details/:tvShowId">
                        <TvShowDetails />
                    </Route>
                    <Route path="/tv-show">
                        <TvShow />
                    </Route>
                    <Route path="/movie/details/:movieId">
                        <MovieDetails />
                    </Route>
                    <Route path="/movies">
                        <Movies
                            handleClickMovieCard={handleClickMovieCard}
                        />
                    </Route>
                    <Route path="/home">
                        <Home
                            carouselOfUpcomingMovies={carouselOfUpcomingMovies}
                            popularMovies={popularMovies}
                            sampleTvShow={sampleTvShow}
                            movieGengres={movieGengres}
                            handleClickMovieCard={handleClickMovieCard}
                            handleClickTvShowCard={handleClickTvShowCard}
                        />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </main>

            <Footer />
        </>
    );
};

export default App;