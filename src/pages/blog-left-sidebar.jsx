import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import BlogLeftSidebarArea from "../container/blog/blog-left-sidebar";

const BlogLeftSidebarPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
                ...globalContent["footer-2"],
                ...globalContent["footer-3"],
                ...globalContent["footer-4"],
            }}
        >
            <SEO title="Blog Left Sidebar" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Left Sidebar"
            />
            <BlogLeftSidebarArea
                data={{
                    items: data.latestPosts.nodes,
                }}
            />
        </Layout>
    );
};

BlogLeftSidebarPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query BlogLeftSidebarPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
            }
        }
        footer: allGeneral(filter: { section: { eq: "footer" } }) {
            nodes {
                footer {
                    ...Footer
                }
            }
        }
        footer2: allGeneral(filter: { section: { eq: "footer-2" } }) {
            nodes {
                footer {
                    ...Footer
                }
            }
        }
        footer3: allGeneral(filter: { section: { eq: "footer-3" } }) {
            nodes {
                footer {
                    ...Footer
                }
            }
        }
        footer4: allGeneral(filter: { section: { eq: "footer-4" } }) {
            nodes {
                footer {
                    ...Footer
                }
            }
        }
        latestPosts: allArticle(
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

export default BlogLeftSidebarPage;
