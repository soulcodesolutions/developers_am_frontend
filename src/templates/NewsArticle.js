import { graphql } from 'gatsby';
import React from 'react';
import Navbar from '../components/navbar';
import Contact from '../components/home/Contact';
import Footer from '../components/footer';
import MarkdownView from 'react-showdown';
import { SEO } from '../components/seo';
import VideoSection from '../components/newsArticles/VideoSection';
import { GoBack } from '../components/ViewAll';
import { customRenderer } from '../components/usefullFunctions';
// import { languages } from '../data/siteMetadata';




function NewsArticle({ location, data = {}, pageContext }) {
  // console.log('Page Context  -> ', pageContext);
  console.log('Data -> ', data);
  // console.log('Location -> ', location);
  let footerData = data.strapiHomePageV2 || {}
  data = data.strapiNewsArticle

  return (<div>
    <Navbar location={location} language={pageContext.locale}  data={{ Footer: footerData.Footer, logo: footerData.logo }}  />
    <div className="header ">
      <div className="container mx-auto pt-[150px] ">
        <div className="header ">
          <div className="w-full">
            <div className='pb-[20px] flex justify-end'>
              {/* <GoBack to={`/${pageContext.locale}/news`} language={pageContext.locale} /> */}
            </div>
            <div className='w-full rounded-xl overflow-hidden '>
              <div
                style={{
                  backgroundImage: `url(${process.env.GATSBY_STRAPI_API_URL}${data?.cover?.url})`
                }}
                className="   bg-repeat">
                <div
                  style={{
                    backdropFilter: "blur(15px)"
                  }}
                  className="w-full h-full backdrop-blur-sm bg-black/50 p-[20px] ">


                  <img
                    style={{
                      maxHeight: "400px"
                    }}
                    src={`${process.env.GATSBY_STRAPI_API_URL}${data?.cover?.url}`} alt="" className='w-fit h-full   rounded-xl' />
                </div>
              </div>
            </div>

          </div>
          <div className="content px-[10px]">
            <div className="pt-[20px] text-[20px] sm:text-[20px] text-center sm:text-left font-bold text-red-800">
              {data?.title}
            </div>
            <div className="text-[16px]  text-center sm:text-left font-bold text-slate-800">
              {data?.description}
            </div>
            <div className="text-[14px] pt-[10px] text-center sm:text-left font-bold text-slate-500">
              {data?.display_date}
            </div>
            <div className="  pt-[20px] py-[50px] popup_container ">

              <div>
                <MarkdownView
                  markdown={customRenderer(data?.content?.data?.content || "")}
                  options={{
                    openLinksInNewWindow: true,
                    simplifiedAutoLink: true,
                    simpleLineBreaks: true
                  }}
                />
              </div>
              <div className="">
                <VideoSection videoSection={data?.videoSection} />
              </div>

              {
                data?.gallery?.length > 0 && <>
                  <div className="pt-[50px]">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-[10px] rounded-xl bg-slate-100 p-[10px]">
                      {data?.gallery?.map(item => {
                        return (<div>
                          <img

                            src={`${process.env.GATSBY_STRAPI_API_URL}${item?.url}`} alt="" className='w-full  rounded-xl' />

                        </div>)
                      })}
                    </div>
                  </div>

                </>
              }

            </div>

          </div>
        </div>
      </div>
    </div>


    {/* <Contact /> */}
    <Footer language={pageContext.locale} data={{ Footer: footerData.Footer, logo: footerData.logo }} />

  </div>);
}

export default NewsArticle;

export const Head = ({ location, data }) => (
  <SEO title={`${data.strapiNewsArticle?.title} - Association Of The Armenian Developers`} />
)


export const query = graphql`
  query NewsArticleQuery($id: String, $locale : String) {
    strapiNewsArticle(id: { eq: $id }) {
      slug
      strapi_id
      title
      description
      display_date
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
      gallery {
        url
      }
      videoSection {
        title
        video_url
      }
    }
    strapiHomePageV2(locale: {eq: $locale}) {

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
  }
`;
