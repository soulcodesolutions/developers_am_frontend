const path = require("path")
const { strapiTypeDefs } = require("./strapiTypeDefs")

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions;
    // Manually defining the Types instead of letting Gatbsy auto infer it from the recieved payload. 
    // This helps to avoid crashes when we try to build without filling out everything on strapi.
    // If you're making changes to your strapi schema, you might have to make changes here as well.
    // createTypes(strapiTypeDefs);
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        query NewsListQuery {
            allStrapiNewsArticle {
              nodes {
                id
                slug
                locale
                uniqueid
                hide_in_website
              }
            }
            
          }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    let articles = result.data.allStrapiNewsArticle.nodes
    // articles = articles.map(item => !item.hide_in_website )
    
    const articleComponent = path.resolve("./src/templates/NewsArticle.js")

    if (articles.length > 0) {
        articles.forEach(article => {
            createPage({
                path: `/${article.locale}/news/${article.uniqueid}`,
                component: articleComponent,
                context: {
                    id : article.id,
                    slug: article.slug,
                    locale: article.locale
                }
            })
        });
    }

}