let PendingSection = (props) => {
  return (
    <>
      <div className={props.backgroundColor}>
        <div className="container py-2">
          {props.sectionTitle && (
            <h2 className="text-center text-white fw-bold py-2">
              {props.sectionTitle}
            </h2>
          )}
          <div className="row featurette py-2 justify-content-center">
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default PendingSection;
