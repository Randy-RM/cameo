import { useState } from "react";
import Modal from 'react-bootstrap/Modal'
import YoutubePlayer from "../youtube_player/YoutubePlayer.jsx";

let TrailerModal = (props) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //console.log(props.movieTrailers);

    return (
        <>


            <div className="text-center py-1">

                <div
                    className="text-center"
                    onClick={handleShow}
                >
                    <div className="btn btn-lg btn-outlin-orang btn-circle">
                        <div className="triangle"></div>
                    </div>

                </div>

            </div>

            <Modal className="bg-opac-0 w-100" entered show={show} onHide={handleClose} size="lg">
                <div className="bg-pine-tree">
                    <Modal.Header className="bg-opac-0">
                        <Modal.Title>
                            <span className="text-deep-saffron fw-bolder">
                                {`Trailer`}
                            </span>
                        </Modal.Title>
                        <span className="btn-close-modal h1" variant="secondary" onClick={handleClose}>
                            X
                        </span>
                    </Modal.Header>
                    <Modal.Body className="bg-opac-0 text-light d-flex justify-content-center">
                        <div className="">
                            <YoutubePlayer trailers={props.trailers} />
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default TrailerModal;
