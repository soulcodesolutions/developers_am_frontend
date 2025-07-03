import React from "react";
import { graphql } from "gatsby";
import Home from "../../components/home/Home";
import { SEO } from "../../components/seo";

export default function Index({ location, data }) {
  return <Home data={data} location={location} />
}


export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.hero_text} - Association Of The Armenian Developers`} />
)


export const query = graphql`
query ArmenianQuery {
  strapiHomePageV2(locale: {eq: "ru"}) {
    sub_heading
    hero_text
    welcome_to_website_heading
    welcome_to_website_content {
      data {
        welcome_to_website_content
      }
    }
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
      title
      display_date
      slug
      uniqueid
      description
      thumbnail {
        url
      }
    }
    contact_heading
    Footer{
      address
      phone
    }
    logo {
      logo  {
        url
      }
      title
    }
  }
}
`
