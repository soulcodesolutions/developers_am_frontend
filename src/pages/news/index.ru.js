import React from 'react';
import { graphql } from "gatsby";
import NewsList from '../../components/news/NewsList';


export default function Index({ location, data }) {
    return (
        <NewsList location={location} data={data}/>
    )
}

export const query = graphql`
query NewsListQuery {
  allStrapiNewsArticle(
    filter: {locale: {eq: "ru"}}
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
      
    }
  }
  strapiHomePageV2(locale: {eq: "ru"}) {
    news_heading
    contact_heading
  }
}`