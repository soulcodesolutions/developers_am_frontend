import React from "react";
import Hero from "./Hero";
import Welcome from "./Welcome";
import AboutUs from "./AboutUs";
import Council from "./Council";
import Members from "./Members";
import Partners from "./Partners";
import News from "./News";
import Navbar from "../navbar";
import Contact from "./Contact";
import Footer from "../footer";

export const languages = ["en", "hy-AM", "ru"];

export default function Home({ location, data }) {
  let language = location.pathname.split('/')[1];
  if (!languages.includes(language)){
      language = "en";
  }
  data = data?.strapiHomePageV2 || {};
  return (
    <>
      <Navbar data={{  logo : data.logo }} location={location} language={language} />
      <Hero 
        data={{ sub_heading: data.sub_heading, hero_text: data.hero_text }} language={language} 
        data2={{ title: data.welcome_to_website_heading, content: data.welcome_to_website_content?.data?.welcome_to_website_content }}
        />
      {/* <Welcome data={{ title: data.welcome_to_website_heading, content: data.welcome_to_website_content?.data?.welcome_to_website_content }} /> */}
      <AboutUs data={{ title: data.about_heading, content: data.about_content?.data?.about_content }} />
      <Council data={{ title: data.council_heading, members: data.council }} language={language}/>
      <Members data={{ title: data.members_heading, members: data.members }} language={language} />
      <Partners data={{ title: data.partner_heading, members: data.partners }} language={language} />
      <News data={{ title: data.news_heading, members: data.news_articles }} language={language} />
      {/* <Contact data={{ title: data.contact_heading}} /> */}
      <Footer data={{ Footer : data.Footer, logo : data.logo }} language={language} location={location} />
      
    </>
  )
}