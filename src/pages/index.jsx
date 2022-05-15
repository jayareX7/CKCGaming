import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png";
import thumbnailBoard from "../../static/images/feature-board.png";
import thumbnailNews from "../../static/images/feature-news.png";
import thumbnailTeams from "../../static/images/feature-team.png";
import thumbnailStaff from "../../static/images/feature-user.png";
import BookingBtn from "../components/booking-btn";

const LandingPage = () => (
    <Layout>
        <SEO title="Make your Staff and Workspace Happy" />

        <div className={"page-header home"}>
            <h1>Make your Staff and Workspace Happy</h1>
            <p>
                HiStaff gives your complex the opportunity to increase the
                percentage of happiness
                <br />
                and enjoyment of your staff and as a result, bring productivity
                to your workspace.
            </p>

            <header>
                <div className={"container"}>
                    <BookingBtn />
                </div>
            </header>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailEvent} />
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Create and Join Events</h2>
                                <p>
                                    Save your time and energy by letting HiStaff
                                    to manage your events (handle the
                                    colleague’s birthday, gathering, etc.)
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
                                    Let the staff write down on the board
                                    freely,
                                    <br />
                                    Joking with each other and writing cool
                                    content can make the workplace more diverse
                                    and attractive for employees.{" "}
                                </p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Board"} src={thumbnailBoard} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Users"} src={thumbnailStaff} />
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Staff management</h2>
                                <p>
                                    Discard traditional ways to archive staff
                                    documents and information, and try new ways
                                    to store and archive them in HiStaff easily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className={"call-to-action"}>
            <div className={"container"}>
                <div className={"call-to-action__content"}>
                    <h2>Sign up for free</h2>
                    <p style={{ color: "#f67240" }}>
                        Sign up and start increasing the productivity of your
                        business with HiStaff.
                    </p>
                </div>

                <div className={"button"}>
                    <a href="https://app.histaff.io" target={"_blank"}>
                        Get Started
                    </a>
                </div>
            </div>
        </div>
    </Layout>
);

export default LandingPage;
