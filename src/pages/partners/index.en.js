import React from 'react';
import { graphql } from "gatsby";
import Partners from '../../components/partners/Partners';
import { SEO } from '../../components/seo';


export default function Index({ location, data }) {
    return (
        <Partners location={location} data={data}/>
    )
}


export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.partner_heading} - Association Of The Armenian Developers`} />
)

export const query = graphql`
query PartnersQuery {
  allStrapiPartner(filter: {locale: {eq: "en"}}) {
    nodes {
      strapi_id
      name
      hide_in_website
      
      photo {
        url
      }
      description  {
        data {
          description
        }
      }
    }
  }
  strapiHomePageV2(locale: {eq: "en"}) {
    partner_heading
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
}`