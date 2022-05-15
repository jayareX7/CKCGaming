import React from "react";
import PropTypes from "prop-types";
import thumbnailBoard from "../../../../static/images/feature-board.png";
import thumbnailEvent from "../../../../static/images/feature-event.png";
import thumbnailStaff from "../../../../static/images/feature-user.png";

const InfoArea = ({ data }) => {
    return (
        <>
            <section className="flex flex-wrap mt-8">
                <div className="container relative ">
                    <div className={"container"}>
                        <div className={"features"}>
                            <div className={"feature__item"}>
                                <div className={"row"}>
                                    <div className={"col-6 first"}>
                                        <div className={"thumbnail"}>
                                            <img
                                                alt={"Event"}
                                                src={thumbnailEvent}
                                            />
                                        </div>
                                    </div>

                                    <div className={"col-6"}>
                                        <div className={"feature__content"}>
                                            <h2>Create and Join Events</h2>
                                            <p>
                                                Save your time and energy by
                                                letting HiStaff to manage your
                                                events (handle the colleague’s
                                                birthday, gathering, etc.)
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"feature__item"}>
                                <div className={"row"}>
                                    <div className={"col-6"}>
                                        <div className={"feature__content"}>
                                            <h2>Public Board</h2>
                                            <p>
                                                Let the staff write down on the
                                                board freely,
                                                <br />
                                                Joking with each other and
                                                writing cool content can make
                                                the workplace more diverse and
                                                attractive for employees.{" "}
                                            </p>
                                        </div>
                                    </div>

                                    <div className={"col-6 first"}>
                                        <div className={"thumbnail"}>
                                            <img
                                                alt={"Board"}
                                                src={thumbnailBoard}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={"feature__item"}>
                                <div className={"row"}>
                                    <div className={"col-6 first"}>
                                        <div className={"thumbnail"}>
                                            <img
                                                alt={"Users"}
                                                src={thumbnailStaff}
                                            />
                                        </div>
                                    </div>

                                    <div className={"col-6"}>
                                        <div className={"feature__content"}>
                                            <h2>Staff management</h2>
                                            <p>
                                                Discard traditional ways to
                                                archive staff documents and
                                                information, and try new ways to
                                                store and archive them in
                                                HiStaff easily.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
InfoArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default InfoArea;
