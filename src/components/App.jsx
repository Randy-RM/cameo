import { Route, Switch, Redirect } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import Home from "./home/Home.jsx";
import Movies from "./movies/Movies.jsx";
import TvShow from "./tv_show/TvShow.jsx";
import MovieDetails from "./movie_details/MovieDetails.jsx";
import TvShowDetails from "./tv_show_details/TvShowDetails.jsx";
import MediaGenresContext from "./contexts/MediaGenresContext.jsx";
import { UseFetchDataAsync } from "./personal_hooks/UseFetchDataAsync.jsx";
import ScrollToTopButton from "./scroll_to_top_button/ScrollToTopButton.jsx";

let App = () => {
  let history = useHistory();

  const apiUrl = "https://api.themoviedb.org";
  const movieGenreUtl = `${apiUrl}/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`;
  const tvGenreUtl = `${apiUrl}/3/genre/tv/list?api_key=${process.env.REACT_APP_API_KEY}`;

  let {
    data: movieGengres,
    isPending: isPendingMovieGengres,
    error: errorMovieGengres,
  } = UseFetchDataAsync(movieGenreUtl);

  let {
    data: tvGenres,
    isPending: isPendingTvGenres,
    error: errorisTvGenres,
  } = UseFetchDataAsync(tvGenreUtl);

  let handleClickMediaCard = (id, cardType = null) => {
    if (cardType === "movie" || cardType == null) {
      history.push(`/movie/details/${id}`);
    }
    if (cardType === "tv") {
      history.push(`/tv/details/${id}`);
    }
  };

  let isEmptyInput = (string) => {
    if (!string.replace(/\s+/, "").length) {
      return false;
    }
    return true;
  };

  console.log(process.env.REACT_APP_API_KEY);

  return (
    <>
      {errorMovieGengres && errorisTvGenres && ""}
      {isPendingMovieGengres && isPendingTvGenres && ""}
      <MediaGenresContext.Provider
        value={{
          movieGengres,
          tvGenres,
        }}
      >
        <Header />

        <main>
          <Switch>
            <Route path="/tv/details/:tvShowId">
              <TvShowDetails />
            </Route>
            <Route path="/tv-show">
              <TvShow
                handleClickMediaCard={handleClickMediaCard}
                isEmptyInput={isEmptyInput}
              />
            </Route>
            <Route path="/movie/details/:movieId">
              <MovieDetails />
            </Route>
            <Route path="/movies">
              <Movies
                handleClickMediaCard={handleClickMediaCard}
                isEmptyInput={isEmptyInput}
              />
            </Route>
            <Route path="/home">
              <Home handleClickMediaCard={handleClickMediaCard} />
            </Route>
            <Redirect to="/home" />
          </Switch>
        </main>
        <ScrollToTopButton />
        <Footer />
      </MediaGenresContext.Provider>
    </>
  );
};

export default App;
