let TitledSection = (props) => {
    return (
        <>
            <div className={props.backgroundColor}>
                <div className="container py-5">
                    <h2 className="text-center text-white fw-bold py-4">{props.sectionTitle}</h2>
                    <div className="row featurette py-3">
                        {props.children}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TitledSection;