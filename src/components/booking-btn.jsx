import React from "react";
import Swing from "react-reveal/Swing";
import Fade from "react-reveal/Fade";
import { Button, Card, Collapse, Row, Col, Modal } from "reactstrap";
import { Reveal } from "react-reveal";

const BookingBtn = () => {
    const [frameDefaultOpen, setFrameDefaultOpen] = React.useState(false);

    return (
        <>
            <Modal
                isOpen={frameDefaultOpen}
                className="modal-danger "
                contentClassName="modal-content_2 bg-gradient-danger"
                onClick={() => setFrameDefaultOpen(false)}
            >
                <div className=" modal-body">
                    <div className=" py-3 text-center">
                        <i className=" ni ni-bell-55 ni-3x"></i>
                        <iframe
                            src="https://ckckidsatplay.simplybook.me/v2/"
                            width="880"
                            height="880"
                            frameBorder="0"
                            allowtransparency="true"
                        ></iframe>
                    </div>
                </div>

                <div className=" modal-footer">
                    <Button
                        className=" btn-white"
                        color="default"
                        type="button"
                    >
                        Ok, Got it
                    </Button>
                    <Button
                        className=" text-white ml-auto"
                        color="link"
                        onClick={() => setFrameDefaultOpen(false)}
                        type="button"
                    >
                        Close
                    </Button>
                </div>
            </Modal>

            <div className="cta-button">
                <Reveal effect="slideInLeft">
                    <Button
                        block
                        className=" get-started "
                        color="none"
                        onClick={() => setFrameDefaultOpen(true)}
                        type="button"
                        data-toggle="modal"
                        data-target="#myModal"
                    >
                        <button type="submit" className="btn_three">
                            Schedule An Appointment
                        </button>
                    </Button>
                </Reveal>
            </div>
        </>
    );
};

export default BookingBtn;
