import React from "react";
import { Link, graphql } from "gatsby";
import Hero from "../../components/home/Hero";
import AboutUs from "../../components/home/AboutUs";
import Council from "../../components/home/Council";
import Members from "../../components/home/Members";
import Partners from "../../components/home/Partners";
import News from "../../components/home/News";
import Navbar from "../../components/navbar";

export default function Home({ location, data }) {
  const language = "en";
  data = data.strapiHomePageV2;
  return (
    <>
      <Navbar language={language} />
      <p className="mt-40">
        Go to
        <Link to="/hy-AM/home"> home</Link>
      </p>
      <Hero data={{ sub_heading: data.sub_heading, hero_text: data.hero_text }} />
      <AboutUs data={{ title: data.about_heading, content: data.about_content }} />
      <Council data={{ title: data.council_heading, members: data.council, isCouncil: true }} />
      <Members data={{ title: data.members_heading, members: data.members }} />
      <Partners data={{ title: data.partner_heading, members: data.partners }} />
      <News data={{ title: data.news_heading, members: data.news_articles }} />
    </>
  )
}

export const query = graphql`
query HomeQuery {
    strapiHomePageV2 {
      sub_heading
      hero_text
      about_heading
      about_content
      council_heading
      council {
        strapi_id
        name
        position
        photo {
          url
        }
      }
      members_heading
      members {
        strapi_id
        name
        photo {
          url
        }
      }
      partner_heading
      partners {
        strapi_id
        name
        photo {
          url
        }
      }
      news_heading
      news_articles {
        strapi_id
        title
        description
        thumbnail {
          url
        }
      }
    }
  }
`
