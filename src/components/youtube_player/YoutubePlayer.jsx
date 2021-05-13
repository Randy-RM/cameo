
let YoutubePlayer = (props) => {

    let { id, key, name } = props.movieTrailers.results;

    //const youtubeUrl = "http://www.youtube.com";
    // width = "640"
    // height = "360"
    //frameborder="0"

    console.log(props.movieTrailers)
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title={name}
                    id={id}
                    type="text/html"
                    className="embed-responsive-item"
                    width="640"
                    height="360"
                    src={`http://www.youtube.com/embed/${key}?enablejsapi=1&origin=http://example.com`}
                >
                </iframe>
            </div>
        </>
    );
};

export default YoutubePlayer;
