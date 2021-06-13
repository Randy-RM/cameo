import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styled from "styled-components";

const StyledCaroussel = styled(Carousel.Item)`
  background: rgba(34, 49, 39, 1);
  background-size: cover;
  background-position: center;
`;

function CarouselLoader() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <>
      <Carousel
        className="bg-pine-tree"
        indicators={true}
        prevIcon={
          <span aria-hidden="true" className="carousel-control-prev-icon" />
        }
        prevLabel={""}
        nextIcon={
          <span aria-hidden="true" className="carousel-control-next-icon" />
        }
        nextLabel={""}
        fade
        controls={true}
        activeIndex={index}
        onSelect={handleSelect}
      >
        <StyledCaroussel className="carousel-item">
          <Carousel.Caption className="">
            <div className="fw-bold display-3">
              <div className="position-relative">
                <div className="position-absolute top-50 start-50 translate-middle">
                  <div className="lds-ring">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <p className="fw-bold">Loading...</p>
            <p className="fw-bold text-center h3 text-deep-saffron">
              Loading... <br />
              <br />
            </p>
            <div className="text-center text-white fw-bold py-1">
              <p>
                <button className="btn btn-lg btn-outlin-orang">
                  Loading...
                </button>
              </p>
            </div>
          </Carousel.Caption>
        </StyledCaroussel>
      </Carousel>
    </>
  );
}

export default CarouselLoader;
