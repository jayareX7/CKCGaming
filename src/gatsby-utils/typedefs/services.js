module.exports = `
    type Services implements Node {
        id: ID!
        title: String!
        name: String
        slug: String!
        needLavel: String
        image: Image
        socials: [Social]
        items: [Item]
    }
    type Item {
        id: ID!
    }
`;
