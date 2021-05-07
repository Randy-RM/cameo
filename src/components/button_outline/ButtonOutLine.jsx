import { NavLink } from "react-router-dom";

let ButtonOutLine = (props) => {
    return (
        <>
            <div className="text-center text-white fw-bold py-1">
                <p>
                    <NavLink className="btn btn-lg btn-outlin-orang" to={props.href}>
                        {props.buttonText}
                    </NavLink>
                </p>
            </div>
        </>
    );
};

export default ButtonOutLine;