import React from 'react';
import { graphql } from "gatsby";
import Members from '../../components/members/Members';
import { SEO } from '../../components/seo';

export default function Index({ location, data }) {

    // console.log(data)

    return (
        <Members location={location} data={data}/>
    )
}

export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.members_heading} - Association Of The Armenian Developers`} />
)

export const query = graphql`
query MembersQuery {
    allStrapiMember(filter: {locale: {eq: "en"}}) {
      nodes {
        strapi_id
        name
        hide_in_website
        associated_member
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
    strapiHomePageV2(locale: {eq: "en"}) {
      members_heading
      associated_member_heading
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