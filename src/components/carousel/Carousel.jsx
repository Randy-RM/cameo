import { useState } from "react";
import { Carousel } from "react-bootstrap";
import ButtonOutLine from "../button_outline/ButtonOutLine.jsx";
import imgA from "../../dist/img/wiche_wiche.jpg";
import imgB from "../../dist/img/away_gints_zibalodis.jpg";
import imgC from "../../dist/img/barbary.jpg";

function CarouselHero() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
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
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgA}
                    alt="First slide"
                />
                <Carousel.Caption className="bg-pine-tree-opac-4">
                    <h2>First slide label</h2>
                    <p className="fw-bold">
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <ButtonOutLine buttonText="See More" href="/home" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgB}
                    alt="Second slide"
                />

                <Carousel.Caption className="bg-pine-tree-opac-4">
                    <h2>Second slide label</h2>
                    <p className="fw-bold">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                    <ButtonOutLine buttonText="See More" href="/home" />
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={imgC}
                    alt="Third slide"
                />

                <Carousel.Caption className="bg-pine-tree-opac-4">
                    <h2>Third slide label</h2>
                    <p className="fw-bold">
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <ButtonOutLine buttonText="See More" href="/home" />
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CarouselHero;