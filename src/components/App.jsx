import { Route, Switch, Redirect } from "react-router-dom";
import NavBarB from "./header/NavBarB.jsx";
import Footer from "./footer/Footer.jsx";
import Home from "./home/Home.jsx";
import Movies from "./movies/Movies.jsx";
import TvShow from "./tv_show/TvShow.jsx";
import UpComingMovies from "./upcoming_movies/UpComingMovies.jsx";
import Details from "./details/Details.jsx";

let App = () => {

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
                        <Home />
                    </Route>
                    <Redirect to="/home" />
                </Switch>
            </main>

            <Footer />
        </>
    );
};

export default App;