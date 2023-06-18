/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `devam-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-plugin-i18n",
      options: {
        langKeyDefault: 'en',
        langKeyForNull: 'en',
        // prefixDefault: false,
        useLangKeyLayout: false
      }
    },
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.STRAPI_API_URL || "http://localhost:1337",
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          {
            singularName: "council",
            queryParams: {
              populate: "*"
            },
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            }
          },
          {
            singularName: "member",
            queryParams: {
              populate: "*"
            },
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            }
          },
          {
            singularName: "partner",
            queryParams: {
              populate: "*"
            },
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            }
          },
          {
            singularName: "news-article",
            queryParams: {
              populate: "*"
            },
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            }
          },
        ],
        singleTypes: [
          {
            singularName: "home-page-v2",
            queryParams: {
              populate: {
                council: "*",
                members: "*",
                partners: "*",
                "news_articles": "*"
              }
            },
            pluginOptions: {
              i18n: {
                locale: "all",
              },
            }
          }
        ]
      }
    }
  ],
}
