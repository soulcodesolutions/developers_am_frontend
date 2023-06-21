import React from 'react';
import { graphql } from 'gatsby';
import Council from '../../components/council/Council';


export default function Index({ location, data }) {
    return (
        <Council  location={location} data={data}/>
    )
}

export const query = graphql`
query CouncilQuery {
    allStrapiCouncil(filter: {locale: {eq: "en"}}) {
      nodes {
        strapi_id
        name
        position
        description
        photo {
          url
        }
      }
    }
    strapiHomePageV2(locale: {eq: "en"}) {
      council_heading
      contact_heading
    }
  }
`