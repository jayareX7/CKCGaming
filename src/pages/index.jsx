import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import HeroArea from "../container/home/hero";
import WelcomeFeaturesArea from "../container/home/welcome-features";
import WatchLiveStremingArea from "../container/home/watch-live-streaming";
import PopulerGamesArea from "../container/home/popular-game";
import TestimonialArea from "../container/home/testimonial";
import LatestBlogArea from "../container/home/latest-blog";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";
import PlayroomAd from "../components/playroom-ad";
import InfoArea from "../container/home/info";

const IndexPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const homeContent = normalizedData(data?.pages1?.content || []);
    const welcomeContent = normalizedData(data?.pages2?.content || []);
    const funContent = normalizedData(data?.pages3?.content || []);
    const infoContent = normalizedData(data?.pages4?.content || []);
    const gameContent = normalizedData(data?.pages5?.content || []);
    const testimonialContent = normalizedData(data?.pages6?.content || []);
    const latestContent = normalizedData(data?.pages7?.content || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Home" pathname="/" />
            <HeroArea data={homeContent["hero-section"]} />
            <InfoArea data={infoContent["info-section"]} />
            <WelcomeFeaturesArea data={welcomeContent["welcome-section"]} />
            <PlayroomAd />

            <PopulerGamesArea
                data={{
                    ...gameContent["populer-games-section"],
                    items: data.allGames.nodes,
                }}
            />
            <FunfactArea data={funContent["funfact-section"]} />
            <TestimonialArea data={testimonialContent["testimonial-section"]} />
            <LatestBlogArea
                data={{
                    ...latestContent["latest-section"],
                    items: data.latestPosts.nodes,
                }}
            />
        </Layout>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allMatch: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGames: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }

                footer2 {
                    ...Footer2
                }
                footer3 {
                    ...Footer3
                }
                footer4 {
                    ...Footer4
                }
            }
        }
        pages1: page(title: { eq: "home" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
            }
        }
        pages2: page(
            title: { eq: "home-welcome-section" }
            pageType: { eq: homepage }
        ) {
            content {
                ...PageContentAll
            }
        }
        pages3: page(
            title: { eq: "home-fun-facts" }
            pageType: { eq: homepage }
        ) {
            content {
                ...PageContentAll
            }
        }
        pages4: page(title: { eq: "home-info" }, pageType: { eq: homepage }) {
            content {
                ...PageContentAll
            }
        }
        pages5: page(
            title: { eq: "home-popular-games" }
            pageType: { eq: homepage }
        ) {
            content {
                ...PageContentAll
            }
        }
        pages6: page(
            title: { eq: "home-testimonials" }
            pageType: { eq: homepage }
        ) {
            content {
                ...PageContentAll
            }
        }
        pages7: page(
            title: { eq: "home-latest-news" }
            pageType: { eq: homepage }
        ) {
            content {
                ...PageContentAll
            }
        }
        allMatch(sort: { order: DESC, fields: date }, limit: 3) {
            nodes {
                ...Matchs
            }
        }
        allGames(sort: { order: DESC, fields: date }, limit: 4) {
            nodes {
                ...Games
            }
        }
        latestPosts: allArticle(
            limit: 4
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                width: 200
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
