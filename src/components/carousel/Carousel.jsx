import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";
import ButtonOutLine from "../button_outline/ButtonOutLine.jsx";

const StyledCaroussel = styled(Carousel.Item)`
background : linear-gradient(0deg, rgba(34, 49, 39, 1), rgba(34, 49, 39, 0.4)), url("${({ bcg }) => bcg}");
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
                indicators={true} controls={true}
                activeIndex={index}
                onSelect={handleSelect}>
                {props.carouselOfUpcomingMovies.map((movie) => {
                    return (
                        <StyledCaroussel key={movie.id} className="carousel-item" bcg={`${sourceImage}${movie.backdrop_path}`}>
                            {/* <img
                                className="d-block w-100"
                                src={`${sourceImage}${movie.backdrop_path}`}
                                alt="First slide"
                            /> */}
                            <Carousel.Caption className="">
                                <h2 className="fw-bold display-3">
                                    {movie.title.length > 20 ? `${movie.title.slice(0, 20)} ...` : movie.title}
                                </h2>
                                <p className="fw-bold">
                                    {`${movie.overview.slice(0, 100)} ...`}
                                </p>
                                <p className="fw-bold text-center h3 text-deep-saffron">
                                    Release date <br />
                                    {`${movie.release_date}`}
                                </p>
                                <ButtonOutLine buttonText="See More" href="/home" />
                            </Carousel.Caption>
                        </StyledCaroussel>
                    );
                })}
            </Carousel>
        </>
    );
}

export default CarouselHero;