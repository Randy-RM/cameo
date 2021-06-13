import { useState, useEffect } from "react";
import SearchBar from "../search/SearchBar.jsx";
import Section from "../section/Section.jsx";
import Paginator from "../paginator/Paginator.jsx";
import StyledHero from "../styled_hero/StyledHero.jsx";
import SectionLoader from "../section/SectionLoader.jsx";
import MediaCardLoader from "../media_card/MediaCardLoader.jsx";
import { UseFetchDataAsync } from "../personal_hooks/UseFetchDataAsync.jsx";
import MetaTitle from "../metaTitle/MetaTitle.jsx";

let Movies = (props) => {
  const apiUrl = "https://api.themoviedb.org";
  const discoverMoviesUrl = `${apiUrl}/3/discover/movie?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;
  const searchMoviesUrl = `${apiUrl}/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=`;

  let [url, setUrl] = useState(discoverMoviesUrl);

  let {
    data: movieList,
    isPending: isPendingMovieList,
    error: errorMovieList,
  } = UseFetchDataAsync(url);

  let handleSearch = (event) => {
    if (
      !props.isEmptyInput(event.target.value) ||
      event.target.value === undefined
    ) {
      setUrl(discoverMoviesUrl);
    } else {
      setUrl(`${searchMoviesUrl}${event.target.value}`);
    }
  };

  let handleClickPagination = (pageIndex) => {
    setUrl(`${url}&page=${pageIndex}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {window.scrollTo(0, 0)}
      <MetaTitle title="Cameo - the best movie gallery" />
      <StyledHero backgroundimage={null} title={`Movies`}>
        <SearchBar
          placeholder="Search Search Movie(s)"
          handleSearch={handleSearch}
        />
      </StyledHero>

      {errorMovieList && (
        <div className="bg-pine-tree">
          <div className="container">
            <div className="row">
              <div className="h1 text-center text-deep-saffron">
                {errorMovieList}
              </div>
            </div>
          </div>
        </div>
      )}
      {isPendingMovieList && (
        <SectionLoader backgroundColor="bg-pine-tree">
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
        </SectionLoader>
      )}
      {movieList && (
        <Section
          backgroundColor="bg-pine-tree"
          mediaList={movieList.results}
          cardType="movie"
          handleClickMediaCard={props.handleClickMediaCard}
        />
      )}

      {errorMovieList && ""}
      {isPendingMovieList && ""}
      {movieList && (
        <Paginator
          handleClickPagination={handleClickPagination}
          page={movieList.page}
          totalPages={movieList.total_pages}
        />
      )}
    </>
  );
};

export default Movies;
