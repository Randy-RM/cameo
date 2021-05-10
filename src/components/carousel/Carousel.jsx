import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ButtonOutLine from "../button_outline/ButtonOutLine.jsx";

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
                        <Carousel.Item key={movie.id} className="carousel-item">
                            <img
                                className="d-block w-100"
                                src={`${sourceImage}${movie.backdrop_path}`}
                                alt="First slide"
                            />
                            <Carousel.Caption className="bg-pine-tree-opac-4">
                                <h2>{movie.title.length > 20 ? `${movie.title.slice(0, 20)} ...` : movie.title}</h2>
                                <p className="fw-bold">
                                    {`${movie.overview.slice(0, 100)} ...`}
                                </p>
                                <ButtonOutLine buttonText="See More" href="/home" />
                            </Carousel.Caption>
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </>
    );
}

export default CarouselHero;