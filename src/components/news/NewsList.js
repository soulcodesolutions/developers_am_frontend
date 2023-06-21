import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../../pages/home/index.en';



function NewsList({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar location={location} language={language} />
        <Content members={data.allStrapiNewsArticle.nodes} title={data.strapiHomePageV2.news_heading} language={language} />
        <Contact data={{ title: data.strapiHomePageV2.contact_heading }} />
        <Footer />

    </div>);
}

export default NewsList;
