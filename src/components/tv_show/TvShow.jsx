import { useState, useEffect } from "react";
import SearchBar from "../search/SearchBar.jsx";
import Section from "../section/Section.jsx";
import Paginator from "../paginator/Paginator.jsx";
import StyledHero from "../styled_hero/StyledHero.jsx";
import SectionLoader from "../section/SectionLoader.jsx";
import MediaCardLoader from "../media_card/MediaCardLoader.jsx";
import { UseFetchDataAsync } from "../personal_hooks/UseFetchDataAsync.jsx";
import MetaTitle from "../metaTitle/MetaTitle.jsx";

let TvShow = (props) => {
  const apiUrl = "https://api.themoviedb.org";
  const popularTvShowUrl = `${apiUrl}/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&sort_by=popularity.desc`;
  const searchTvShowUrl = `${apiUrl}/3/search/tv?api_key=${process.env.REACT_APP_API_KEY}`;

  let [url, setUrl] = useState(popularTvShowUrl);
  let {
    data: tvShowList,
    isPending: isPendingTvShowList,
    error: errorTvShowList,
  } = UseFetchDataAsync(url);

  let handleSearch = (event) => {
    if (
      props.isOnlyEmptyCharacters(event.target.value) ||
      event.target.value === undefined
    ) {
      setUrl(popularTvShowUrl);
    } else {
      setUrl(`${searchTvShowUrl}&query=${event.target.value}`);
    }
  };

  let handleClickPagination = (pageIndex) => {
    setUrl(`${popularTvShowUrl}&page=${pageIndex}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {window.scrollTo(0, 0)}
      <MetaTitle title="Cameo - the best tv show gallery" />
      <StyledHero backgroundimage={null} title={`Tv show`}>
        <SearchBar
          placeholder="Search Search Tv show(s)"
          handleSearch={handleSearch}
        />
      </StyledHero>

      {errorTvShowList && (
        <div className="bg-pine-tree">
          <div className="container">
            <div className="row">
              <div className="h1 text-center text-deep-saffron">
                {errorTvShowList}
              </div>
            </div>
          </div>
        </div>
      )}
      {isPendingTvShowList && (
        <SectionLoader backgroundColor="bg-pine-tree">
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
          <MediaCardLoader />
        </SectionLoader>
      )}
      {tvShowList && (
        <Section
          backgroundColor="bg-pine-tree"
          mediaList={tvShowList.results}
          cardType="tv"
          handleClickMediaCard={props.handleClickMediaCard}
        />
      )}

      {errorTvShowList && ""}
      {isPendingTvShowList && ""}
      {tvShowList && (
        <Paginator
          handleClickPagination={handleClickPagination}
          page={tvShowList.page}
          totalPages={tvShowList.total_pages}
        />
      )}
    </>
  );
};

export default TvShow;
