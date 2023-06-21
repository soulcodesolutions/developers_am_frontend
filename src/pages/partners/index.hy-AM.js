import React from 'react';
import { graphql } from "gatsby";
import Partners from '../../components/partners/Partners';


export default function Index({ location, data }) {
    return (
        <Partners location={location} data={data}/>
    )
}

export const query = graphql`
query PartnersQuery {
  allStrapiPartner(filter: {locale: {eq: "hy-AM"}}) {
    nodes {
      strapi_id
      name
      photo {
        url
      }
    }
  }
  strapiHomePageV2(locale: {eq: "hy-AM"}) {
    partner_heading
    contact_heading
  }
}`