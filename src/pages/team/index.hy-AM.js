import React from 'react';
import { graphql } from 'gatsby';
import Team from '../../components/Team/Team';
import { SEO } from '../../components/seo';


export default function Index({ location, data }) {
    return (
        <Team  location={location} data={data}/>
    )
}

export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.our_team_heading} - Association Of The Armenian Developers`} />
)


export const query = graphql`
query TeamQuery {
    allStrapiTeam(filter: {locale: {eq: "hy-AM"}}) {
      nodes {
        strapi_id
        name
        hide_in_website
        position
        description  {
          data {
            description
          }
        }
        photo {
          url
        }
      }
    }
    strapiHomePageV2(locale: {eq: "hy-AM"}) {
      our_team_heading
      contact_heading
    }
  }
`