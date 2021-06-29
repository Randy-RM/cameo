let CreditActor = (props) => {
  let actor = props.actor;
  let sourceProfile = props.sourceProfile;
  return (
    <>
      <div className="col-4 col-md-2 p-2">
        <p className="text-center">
          <img
            src={`${sourceProfile}${actor.profile_path}`}
            className="img-thumbnail"
            alt={actor.name}
          />
        </p>
        <p className="text-center">
          {actor.name}
          <br />
          <span className="text-deep-saffron"> As </span>
          <br />
          {actor.character}
        </p>
      </div>
    </>
  );
};

export default CreditActor;
