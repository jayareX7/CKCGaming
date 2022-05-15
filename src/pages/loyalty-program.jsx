import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";

const LoyaltyPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Loyalty Program" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Loyalty Program"
            />
        </Layout>
    );
};

LoyaltyPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query LoyaltyPageQuery {
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
        page(title: { eq: "FAQPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default LoyaltyPage;
