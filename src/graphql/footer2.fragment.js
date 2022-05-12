import { graphql } from "gatsby";

export const query = graphql`
    fragment Footer2 on Footer {
        id
        title
        contact_info {
            id
            text
            title
        }
    }
`;
