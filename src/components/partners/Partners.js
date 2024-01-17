import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../home/Home';

function Partners({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar data={{ logo : data.strapiHomePageV2.logo }} location={location} language={language} />
        <Content members={data.allStrapiPartner.nodes} title={data.strapiHomePageV2.partner_heading} location={location} language={language}  />
        {/* <Contact data={{ title: data.strapiHomePageV2.contact_heading }} /> */}
        <Footer language={language}   data={{ Footer : data.strapiHomePageV2.Footer, logo : data.strapiHomePageV2.logo }} />

    </div>);
}

export default Partners;