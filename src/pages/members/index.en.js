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
    allStrapiMember(filter: {locale: {eq: "en"}}) {
      nodes {
        strapi_id
        name
        position
        photo {
          url
        }
      }
    }
    strapiHomePageV2(locale: {eq: "en"}) {
      members_heading
    }
  }`