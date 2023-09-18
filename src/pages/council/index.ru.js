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
    allStrapiCouncil(filter: {locale: {eq: "ru" }}) {
      nodes {
        strapi_id
        name
        
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
    strapiHomePageV2(locale: {eq: "ru"}) {
      council_heading
      contact_heading
    }
  }
`