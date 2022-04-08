import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const PlayroomAd = () => {
    return (
        <section className="gaming-update-section mx-16 md:mx-28 my-16 md:my-28">
            <div className="container">
                <div className="gaming-update-card relative mt-16 md:mt-28">
                    <div className="gaming_update_text z-10 relative py-15 px-8 md:py-24 md:px-24 flex justify-between items-center flex-col lg:flex-row">
                        <span className="absolute h-full top-0">
                            <StaticImage
                                className="rounded-5xl relative h-full"
                                src="../../data/images/others/playroom-ad.webp"
                                alt=""
                            />
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlayroomAd;
