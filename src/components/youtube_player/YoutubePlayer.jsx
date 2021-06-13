let YoutubePlayer = (props) => {
  let { id, key, name } = props.trailers.results[0];

  return (
    <>
      {props.trailers.length === 0 || props.trailers === undefined ? (
        <p className="h2 text-deep-saffron text-center">Vidéos undefined</p>
      ) : (
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title={name}
            id={id}
            type="text/html"
            className="iframe"
            src={`https://www.youtube.com/embed/${key}?enablejsapi=1&origin=https://musing-liskov-3730d2.netlify.app/`}
          ></iframe>
        </div>
      )}
    </>
  );
};

export default YoutubePlayer;
