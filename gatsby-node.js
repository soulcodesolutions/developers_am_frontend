const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions

    const result = await graphql(
        `
        query NewsListQuery {
            allStrapiNewsArticle {
              nodes {
                slug
                locale
              }
            }
          }
        `
    )

    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    const articles = result.data.allStrapiNewsArticle.nodes
    const articleComponent = path.resolve("./src/templates/NewsArticle.js")

    if (articles.length > 0) {
        articles.forEach(article => {
            createPage({
                path: `/${article.locale}/news/${article.slug}`,
                component: articleComponent,
                context: {
                    slug: article.slug,
                    locale: article.locale
                }
            })
        });
    }

}