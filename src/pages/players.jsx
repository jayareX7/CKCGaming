import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import PlayersArea from "../container/players/players-list";

const PlayersPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Badges" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Players"
            />
            <PlayersArea
                data={{
                    items: data.allPlayers.nodes,
                }}
            />
        </Layout>
    );
};

PlayersPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allPlayers: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query playersPagePageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    contact_info {
                        text
                        title
                        id
                        icon
                    }
                    socials {
                        link
                        title
                        icon
                        id
                    }
                    list {
                        id
                        link
                        text
                    }
                    images {
                        alt
                        src {
                            childImageSharp {
                                gatsbyImageData
                            }
                        }
                    }
                    id
                }
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

export default PlayersPage;
