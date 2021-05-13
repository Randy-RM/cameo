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

            <Modal entered show={show} onHide={handleClose} size="lg">
                <div className="bg-pine-tree">
                    <Modal.Header className="bg-pine-tree border-pine-tree">
                        <Modal.Title></Modal.Title>
                        <span className="btn-close-modal h1" variant="secondary" onClick={handleClose}>
                            X
                        </span>
                    </Modal.Header>
                    <Modal.Body className="bg-pine-tree border-pine-tree text-light d-flex justify-content-center">
                        <div className="bg-deep-saffron">
                            <YoutubePlayer movieTrailers={props.movieTrailers} />
                        </div>
                    </Modal.Body>
                </div>
            </Modal>
        </>
    );
};

export default TrailerModal;
