import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer3 on Footer3 {
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
