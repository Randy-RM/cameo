import React from "react";
import MediaCard from "../media_card/MediaCard.jsx";

let MoviesSection = (props) => {
  return (
    <>
      <div className={props.backgroundColor}>
        <div className="container">
          <div className="row justify-content-center">
            {props.mediaList.map((media) => {
              let title = "";
              if (props.cardType === "movie") {
                title =
                  media.title.length > 18
                    ? `${media.title.slice(0, 18)} ...`
                    : media.title;
              } else if (props.cardType === "tv") {
                title =
                  media.name.length > 18
                    ? `${media.name.slice(0, 18)} ...`
                    : media.name;
              }
              return (
                <MediaCard
                  media={media}
                  key={media.id}
                  genres={props.genres}
                  handleClickMediaCard={props.handleClickMediaCard}
                  cardType={props.cardType}
                >
                  {title}
                </MediaCard>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MoviesSection;
