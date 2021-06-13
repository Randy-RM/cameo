import { FaAngleUp } from "react-icons/fa";
import { useState } from "react";

let ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <>
      <span
        id="backToTop"
        className={`btn btn-light btn-lg back-to-top text-center text-pine-tree fw-bolder ${
          !visible && `back-to-top-hide`
        }`}
        data-scroll="up"
        role="button"
        onClick={scrollToTop}
      >
        <FaAngleUp size={30} style={{ fill: "#223127" }} />
        <br />
        Top
      </span>
    </>
  );
};

export default ScrollToTopButton;
