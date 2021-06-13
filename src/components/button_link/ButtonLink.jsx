import { NavLink } from "react-router-dom";

let ButtonLink = (props) => {
  return (
    <>
      <div className="text-center text-white fw-bold py-1">
        <p>
          <NavLink className="btn btn-lg btn-deep-saffron" to={props.href}>
            {props.buttonText}
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default ButtonLink;
