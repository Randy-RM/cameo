import defaultImage from "./colage-movies.jpg";
import styled from "styled-components";

const StylizedHero = styled("div")`
  background: linear-gradient(0deg, rgba(34, 49, 39, 1), rgba(34, 49, 39, 0.4)),
    url("${({ backgroundimage }) => backgroundimage}");
  background-size: cover;
  background-position: center;
`;

let StyledHero = (props) => {
  return (
    <>
      <div className="">
        <StylizedHero
          backgroundimage={
            props.backgroundimage ? props.backgroundimage : defaultImage
          }
          className="hero text-light"
        >
          <div
            className={
              props.backgroundimage ? `container py-5 mt-5` : `container`
            }
          >
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <h1 className="text-center size-hero">{props.title}</h1>
              </div>
              <div className="row justify-content-center">{props.children}</div>
            </div>
          </div>
        </StylizedHero>
      </div>
    </>
  );
};

export default StyledHero;
