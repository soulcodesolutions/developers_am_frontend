import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../home/Home';



function NewsList({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar data={{ logo : data.strapiHomePageV2.logo }} location={location} language={language} />
        <Content members={data.allStrapiNewsArticle.nodes} title={data.strapiHomePageV2.news_heading} language={language} />
        {/* <Contact data={{ title: data.strapiHomePageV2.contact_heading }} /> */}
        <Footer language={language} data={{ Footer : data.strapiHomePageV2.Footer, logo : data.strapiHomePageV2.logo }} />

    </div>);
}

export default NewsList;
