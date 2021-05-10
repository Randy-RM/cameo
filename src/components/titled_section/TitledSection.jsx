import React from "react";

let TitledSection = (props, children) => {
    return (
        <>
            {console.log(children)}
            <div className={props.backgroundColor}>
                <div className="container py-5">
                    <h2 className="text-center text-white fw-bold py-4">{props.sectionTitle}</h2>
                    <div className="row featurette py-3">
                        {/* {
                            () => {
                                const childrenWithProps = React.Children.map(props.children, child => {
                                    // checking isValidElement is the safe way and avoids a typescript error too
                                    if (React.isValidElement(child)) {
                                        return React.cloneElement(child, { movie: props.movie });
                                    }
                                    return child;
                                });

                                return { childrenWithProps };
                            }
                        } */}
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitledSection;