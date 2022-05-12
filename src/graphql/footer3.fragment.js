import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer3 on Footer {
        id
        title
        list {
            id
            link
            text
            icon
        }
    }
`;
