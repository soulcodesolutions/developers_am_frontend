import React from 'react';
import { graphql } from "gatsby";
import Members from '../../components/members/Members';
import { SEO } from '../../components/seo';


export default function Index({ location, data }) {
    return (
        <Members location={location} data={data}/>
    )
}

export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.members_heading} - Association Of The Armenian Developers`} />
)


export const query = graphql`
query MembersQuery {
  allStrapiMember(filter: {locale: {eq: "ru"}}) {
    nodes {
      strapi_id
      name
      hide_in_website
      
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
    members_heading
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