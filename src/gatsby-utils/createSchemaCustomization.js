const {
    pagesDefs,
    contentDefs,
    generalDefs,
    matchDefs,
    gamesDefs,
    articlesDefs,
    servicesDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pagesDefs,
        contentDefs,
        generalDefs,
        matchDefs,
        gamesDefs,
        articlesDefs,
        servicesDefs,
    ];

    createTypes(allTypeDefs);
};
