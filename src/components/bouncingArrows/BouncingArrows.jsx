import styled, { keyframes } from "styled-components";
import { FiChevronsDown } from "react-icons/fi";

const bouncingArrows = keyframes`
from{
  transform : translateY(40%);
}to{
  transform : translateY(0%);

}`;

const DoubleArrows = styled.div`
  animation: 0.8s ${bouncingArrows} ease-out alternate infinite;
  margin-top: -5rem;
  z-index: 4;
`;

let BouncingArrows = () => {
  return (
    <>
      <DoubleArrows className="text-deep-saffron display-1 d-flex justify-content-center">
        <FiChevronsDown />
      </DoubleArrows>
    </>
  );
};

export default BouncingArrows;
