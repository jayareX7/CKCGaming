import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer4 on Footer {
        id
        title
        images {
            alt
            src {
                childImageSharp {
                    gatsbyImageData(quality: 100)
                }
            }
        }
    }
`;
