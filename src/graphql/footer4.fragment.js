import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer4 on Footer4 {
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
