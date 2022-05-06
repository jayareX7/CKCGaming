import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "@components/pagebreadcrumb";
import BlogLeftSidebarArea from "../../container/blog/blog-left-sidebar";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";

const BlogDatePage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Blog Date Post" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Blog Date Post"
            />
            <BlogLeftSidebarArea
                data={{
                    items: data.allArticle.nodes,
                }}
            />
        </Layout>
    );
};

BlogDatePage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allArticle: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query BlogDatePageQuery($slug: String) {
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
        allArticle(filter: { postedAt: { slug: { eq: $slug } } }) {
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

export default BlogDatePage;
