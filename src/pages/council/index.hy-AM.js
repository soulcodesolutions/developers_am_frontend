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
    allStrapiCouncil(filter: {locale: {eq: "hy-AM"}}) {
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
    strapiHomePageV2(locale: {eq: "hy-AM"}) {
      council_heading
    }
  }
`