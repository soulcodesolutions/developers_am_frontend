import React from 'react';
import { graphql } from "gatsby";
import Members from '../../components/members/Members';


export default function Index({ location, data }) {
    return (
        <Members location={location} data={data}/>
    )
}

export const query = graphql`
query MembersQuery {
  allStrapiMember(filter: {locale: {eq: "ru"}}) {
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
    members_heading
    contact_heading
  }
}`