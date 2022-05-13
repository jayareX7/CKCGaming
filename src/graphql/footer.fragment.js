import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer on Footer {
        id
        text
        socials {
            id
            icon
            link
            title
        }
    }
`;
