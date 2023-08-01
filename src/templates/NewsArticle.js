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
    <div className="header ">
      <div className="container mx-auto pt-[150px] ">
        <div className="header ">
          <div className="w-full">
            <div className='w-full rounded-xl overflow-hidden bg-red-100'>
              <img src={`${process.env.STRAPI_API_URL}${data?.cover.url}`} alt="" className='w-full' />
            </div>

          </div>
          <div className="content px-[10px]">
            <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
              {data.title}
            </div>
            <div className="text-[16px]  text-center sm:text-left font-bold text-slate-800">
              {data.description}
            </div>

          </div>
        </div>
      </div>
    </div>

    <div className="container mx-auto pt-[50px] py-[50px]">

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
  query NewsArticleQuery($slug: String) {
    strapiNewsArticle(slug: { eq: $slug }) {
      slug
      strapi_id
      title
      description
      
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
`;
