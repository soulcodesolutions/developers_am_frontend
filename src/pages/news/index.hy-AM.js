import React from 'react';
import { graphql } from "gatsby";
import NewsList from '../../components/news/NewsList';
import { SEO } from '../../components/seo';


export default function Index({ location, data }) {
    return (
        <NewsList location={location} data={data}/>
    )
}

export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiHomePageV2.news_heading} - Association Of The Armenian Developers`} />
)


export const query = graphql`
query NewsListQuery {
  allStrapiNewsArticle(
    filter: {locale: {eq: "hy-AM"}}
    sort: [{ display_date : DESC }, { createdAt : DESC}]
    ) {
    nodes {
      strapi_id
      slug
      uniqueid
      title
      description
      display_date
      thumbnail {
        url
      }
      hide_in_website
    
    }
  }
  strapiHomePageV2(locale: {eq: "hy-AM"}) {
    news_heading
    contact_heading
  }
}`