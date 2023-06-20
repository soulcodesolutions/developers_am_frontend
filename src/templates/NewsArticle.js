import { graphql } from 'gatsby';
import React from 'react';
import Navbar from '../components/navbar';
import Contact from '../components/home/Contact';
import Footer from '../components/footer';
import MarkdownView from 'react-showdown';


function NewsArticle({ location, data, pageContext }) {
    console.log('Page Context  -> ', pageContext);
    console.log('Data -> ', data);
    console.log('Location -> ', location);
    data = data.strapiNewsArticle
    return (<div>
        <Navbar location={location} language={pageContext.locale} />
        <div className="container mx-auto pt-[150px] py-[50px]">
            <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                {data.title}
            </div>
            <div>
                <MarkdownView markdown={data.content.data.content} />
            </div>
        </div>
        <Contact />
        <Footer />

    </div>);
}

export default NewsArticle;

export const query = graphql`
query NewsArticleQuery($slug:String) {
    strapiNewsArticle(slug: {eq: $slug}) {
      slug
      strapi_id
      title
      description
      publishedAt
      thumbnail {
        url
      }
      cover {
        url
      }
      content {
        data {
          content
        }
      }
    }
  }
`