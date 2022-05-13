import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import HeroImage from "../../../data/images/hero/hero-bg1.webp";
import WelcomeImage from "../../../data/images/hero/hero-bg2.webp";

const HeroArea = ({ data }) => {
    return (
        <>
            <section
                className="relative container h-540 md:h-650 lg:h-780 xl:h-940 bg-no-repeat bg-center bg-cover flex items-center"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                }}
            >
                <div className="container px-4 z-10">
                    <div className="text-white mt-16">
                        {data?.headings?.[0] && (
                            <h1 className="mb-6 sm:mb-10 text-shadow uppercase max-w-3xl">
                                {data.headings[0].content}
                            </h1>
                        )}
                        {data?.texts?.[0] && (
                            <p className="text-base  lg:text-md font-bold mb-6 sm:mb-10 ">
                                {data.texts[0].content}
                            </p>
                        )}
                        {data?.buttons &&
                            data.buttons.map(({ id, content, ...props }) => (
                                <Button
                                    key={id}
                                    {...props}
                                    className="text-white"
                                >
                                    {content}
                                    <StaticImage
                                        className="align-middle ml-3 transition-all group-hover:ml-5"
                                        src="../../../data/images/icons/arrrow-icon.webp"
                                        alt=""
                                    />
                                </Button>
                            ))}
                    </div>
                </div>
            </section>

            <section className="flex flex-wrap -mt-8">
                <div className="container relative ">
                    <div className="grid grid-cols-4 gap-4">
                        <div
                            className="h-540 bg-no-repeat bg-left flex items-center"
                            style={{
                                backgroundImage: `url(${WelcomeImage})`,
                            }}
                        ></div>
                        <div className="">
                            <p className="text-base  lg:text-md font-bold mb-6 sm:mb-10 ">
                                Lorem Ipsum and blah blah blah
                            </p>
                            <Button className="text-white">
                                <p>Book Session</p>
                                <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};
export default HeroArea;
