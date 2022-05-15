import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import ServicesDetailsText from "../../container/players/players-list/players-details";
import Button from "../../components/shared/button";
import PlayerCard from "../../components/player-card";
const ServicesDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Service Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Service Details"
            />
            <div className="players-post-content-wrapper pt-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-9 gap-8 lg:gap-14">
                        <div className="players-card col-span-1 md:col-span-4 lg:col-span-3 mx-auto md:max-w-none max-w-xs">
                            <div className="inline-block mb-4 image border-4 border-secondary-90 bg-secondary border-opacity-100 rounded-4xl">
                                <GatsbyImage
                                    className="rounded-4xl"
                                    image={getImage(data?.services?.image?.src)}
                                    alt={data?.services?.image?.alt}
                                />
                            </div>

                            <div className="social-link text-center mt-8 space-x-3">
                                {data?.services?.socials &&
                                    data?.services?.socials?.map((item) => (
                                        <li
                                            key={`players-social-${item.id}`}
                                            className="text-center inline-block"
                                        >
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 flex items-center justify-center border-2 border-secondary-90 bg-secondary border-opacity-100 rounded-full hover:bg-primary hover:border-primary "
                                            >
                                                <i className={item.icon}></i>
                                            </a>
                                        </li>
                                    ))}
                            </div>
                        </div>

                        <div className="side__right col-span-1  md:col-span-5 lg:col-span-6">
                            <div className="content">
                                <h2 className="service-title text-primary font-bold uppercase mb-6">
                                    {data?.services?.title}
                                </h2>
                                {data?.services?.items &&
                                    data?.services?.items?.map((item) => (
                                        <ServicesDetailsText
                                            key={`services-${item.id}`}
                                            description={item.description}
                                        />
                                    ))}

                                <div className="mt-10">
                                    <Button path="/contact-us" size="lg">
                                        Book Your Appointment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

ServicesDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        services: PropTypes.shape({
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
            image: PropTypes.object,
            id: PropTypes.string,
            title: PropTypes.string,
            name: PropTypes.string,
            needLavel: PropTypes.string,
            socials: PropTypes.array,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                })
            ),
        }),
    }),
};

export const postQuery = graphql`
    query servicesDetailsBySlug($slug: String!) {
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
        services(slug: { eq: $slug }) {
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
                id
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
`;
export default ServicesDetails;
