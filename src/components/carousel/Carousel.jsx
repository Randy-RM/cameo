import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import ButtonOutLine from "../button_outline/ButtonOutLine.jsx";

const StyledCaroussel = styled(Carousel.Item)`
background : linear-gradient(0deg, rgba(34, 49, 39, 1), rgba(34, 49, 39, 0.4)), url("${({ backgroundimage }) => backgroundimage}");
background-size:cover;
background-position:center;
`

function CarouselHero(props) {

    const sourceImage = "https://image.tmdb.org/t/p/original/";

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <>
            <Carousel
                className="bg-pine-tree"
                indicators={true}
                prevIcon={<span aria-hidden="true" className="carousel-control-prev-icon" />}
                prevLabel={""}
                nextIcon={<span aria-hidden="true" className="carousel-control-next-icon" />}
                nextLabel={""}
                fade
                controls={true}
                activeIndex={index}
                onSelect={handleSelect}>
                {props.mediaList.map((media) => {
                    return (
                        <StyledCaroussel key={media.id} className="carousel-item" backgroundimage={`${sourceImage}${media.backdrop_path}`}>
                            <Carousel.Caption className="">
                                <h2 className="fw-bold display-3">
                                    {media.title.length > 20 ? `${media.title.slice(0, 20)} ...` : media.title}
                                </h2>
                                <p className="fw-bold">
                                    {`${media.overview.slice(0, 100)} ...`}
                                </p>
                                <p className="fw-bold text-center h3 text-deep-saffron">
                                    Release date <br />
                                    {`${media.release_date}`}
                                </p>
                                <ButtonOutLine
                                    buttonText="See More"
                                    href=""
                                    movieId={media.id}
                                    handleClick={props.handleClickMediaCard}
                                />
                            </Carousel.Caption>
                        </StyledCaroussel>
                    );
                })}
            </Carousel>
        </>
    );
}

export default CarouselHero;