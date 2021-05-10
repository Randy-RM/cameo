import { Route, Switch, Redirect } from "react-router-dom";
import { useState, useEffect } from 'react';
import NavBarB from "./header/NavBarB.jsx";
import Footer from "./footer/Footer.jsx";
import Home from "./home/Home.jsx";
import Movies from "./movies/Movies.jsx";
import TvShow from "./tv_show/TvShow.jsx";
import UpComingMovies from "./upcoming_movies/UpComingMovies.jsx";
import Details from "./details/Details.jsx";

let App = () => {

    const apiKey = "54476c52f6659a1c87aca096a4365b14";
    const apiUrl = "https://api.themoviedb.org";
    const upcomingMoviesUrl = `${apiUrl}/3/movie/upcoming?api_key=${apiKey}`;
    const popularMoviesUrl = `${apiUrl}/3/movie/popular?api_key=${apiKey}`;
    const homeApiUrls = [upcomingMoviesUrl, popularMoviesUrl];

    let [carouselOfUpcomingMovies, setCarouselOfUpcomingMovies] = useState([]);
    let [popularMovies, setPopularMovies] = useState([]);

    useEffect(async () => {
        let itemCarouselUpcomingMoviesList = [];
        let itemPopularMoviesList = [];
        try {
            // fetch(upcomingMoviesUrl)
            //     .then(
            //         (response) => {
            //             return response.json()
            //         }
            //     )
            //     .then(
            //         (data) => {
            //             // console.log("je suis dans fetchData");
            //             for (let i = 0; i < 4; i++) {
            //                 itemCarouselUpcomingMoviesList.push(data.results[i]);

            //             }
            //             setCarouselOfUpcomingMovies(itemCarouselUpcomingMoviesList);
            //         }
            //     );

            Promise.all(homeApiUrls.map(
                (url) => {
                    fetch(url)
                        .then(
                            (response) => {
                                response.json();
                            }
                        )
                }
            )).then(
                (data) => {
                    console.log(data);
                    // let myData = data[0];
                    // for (let i = 0; i < 4; i++) {
                    //     itemCarouselUpcomingMoviesList.push(myData.results[i]);

                    // }
                    // setCarouselOfUpcomingMovies(itemCarouselUpcomingMoviesList);

                })
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <NavBarB />

            <main>
                <Switch>
                    <Route path="/details">
                        <Details />
                    </Route>
                    <Route path="/upcoming-movies">
                        <UpComingMovies />
                    </Route>
                    <Route path="/tv-show">
                        <TvShow />
                    </Route>
                    <Route path="/movies">
                        <Movies />
                    </Route>
                    <Route path="/home">
                        <Home carouselOfUpcomingMovies={carouselOfUpcomingMovies} />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </main>

            <Footer />
        </>
    );
};

export default App;