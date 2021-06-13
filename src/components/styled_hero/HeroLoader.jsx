import styled from "styled-components";

const StylizedHero = styled("div")`
  background: rgba(34, 49, 39, 1);
  background-size: cover;
  background-position: center;
`;

let HeroLoader = (props) => {
  return (
    <>
      <div className="">
        <StylizedHero className="hero text-light">
          <div
            className={
              props.StylizedFor === "details"
                ? `container py-5 mt-5`
                : `container`
            }
          >
            <div className="row justify-content-center">
              <div className="col-12 col-md-10 col-lg-8">
                <div className="loader">
                  <div className="">
                    <div className="lds-ring">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">Loading...</div>
            </div>
          </div>
        </StylizedHero>
      </div>
    </>
  );
};

export default HeroLoader;
