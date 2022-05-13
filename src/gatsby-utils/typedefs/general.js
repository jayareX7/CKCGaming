module.exports = `
    type General implements Node @childOf(types: ["GeneralJson"]){
        id: ID!
        section: String!
        menu: [Menu]
        footer: [Footer]
        footer2: [Footer2]
        footer3: [Footer3]
        footer4: [Footer4]
    }
    type Menu {
        id: ID!
        text: String!
        link: String!
        submenu: [Submenu]
        megamenu: [Megamenu]
    }
    type Submenu {
        id: ID!
        text: String!
        link: String!
    }
    type Megamenu {
        title: String
        submenu: [Submenu]
    }
    type Footer {
        id: ID!
        text: String
        images: [Image]

    }
    type Footer2 {
        id: ID!
        text: String
        contact_info: [ContactInfo]
    }
    type Footer3 {
        id: ID!
        text: String
        images: [Image]
    }
    type Footer4 {
        id: ID!
        text: String
        list: [List]
    }
    type ContactInfo {
        id: ID!
        title: String
        text: String
        icon: String
    }
    type List {
        id: ID!
        text: String!
        link: String!
        icon: String
    }
`;
