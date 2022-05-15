import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import FunfactArea from "../container/home/funfact";
import AboutUsOurStudioArea from "../container/about-us/about-us-our-studio";
import PlayersArea from "../container/players/players-list";

const MatchPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    const funContent = normalizedData(data?.pages3?.content || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="About Us Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
            <AboutUsOurStudioArea data={content["our-studio-section"]} />
            <FunfactArea data={funContent["funfact-section"]} />
            <PlayersArea
                data={{
                    items: data.allPlayers.nodes,
                }}
            />
        </Layout>
    );
};

MatchPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allPlayers: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query aboutPagePageQuery {
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
        page(title: { eq: "aboutUsPage" }, pageType: { eq: innerpage }) {
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
        allPlayers {
            nodes {
                name
                slug
                title
                needLavel
                socials {
                    id
                    icon
                    link
                    title
                }
                items {
                    description
                    designation
                }
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(formats: WEBP)
                        }
                    }
                }
            }
        }
    }
`;

export default MatchPage;
