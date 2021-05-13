
let YoutubePlayer = (props) => {

    let { id, key, name } = props.trailers.results[0];

    //const youtubeUrl = "http://www.youtube.com";
    // width = "640"
    // height = "360"
    //frameborder="0"
    // console.log(props.movieTrailers.results)
    //div class embed-responsive embed-responsive-16by9
    //iframe class embed-responsive-item
    return (
        <>
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                    title={name}
                    id={id}
                    type="text/html"
                    className="iframe"
                    src={`http://www.youtube.com/embed/${key}?enablejsapi=1&origin=https://musing-liskov-3730d2.netlify.app/`}
                >
                </iframe>
            </div>
        </>
    );
};

export default YoutubePlayer;
