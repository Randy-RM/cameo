import React from "react";
import CardTv from "../card_tv/CardTv.jsx";

let TitledSectionTv = (props) => {

    return (
        <>
            <div className={props.backgroundColor}>
                <div className="container py-5">
                    <h2 className="text-center text-white fw-bold py-4">{props.sectionTitle}</h2>
                    <div className="row featurette py-3">
                        {
                            props.tvs.map((tv) => {
                                return (
                                    <CardTv tv={tv} key={tv.id} />
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitledSectionTv;