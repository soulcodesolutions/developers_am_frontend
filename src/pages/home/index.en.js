import React from "react";
import { graphql } from "gatsby";
import Home from "../../components/home/Home";

export default function Index({ location, data }) {
  return <Home data={data} location={location} />
}

export const query = graphql`
query HomeQuery {
    strapiHomePageV2 {
      sub_heading
      hero_text
      about_heading
      about_content {
        data {
          about_content
        }
      }
      council_heading
      council {
        strapi_id
        name
        position
        photo {
          url
        }
      }
      members_heading
      members {
        strapi_id
        name
        photo {
          url
        }
      }
      partner_heading
      partners {
        strapi_id
        name
        photo {
          url
        }
      }
      news_heading
      news_articles {
        strapi_id
        slug
        title
        description
        thumbnail {
          url
        }
      }
      contact_heading
    }
  }
`
