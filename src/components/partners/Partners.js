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
        <Navbar location={location} language={language} />
        <Content members={data.allStrapiPartner.nodes} title={data.strapiHomePageV2.partner_heading} />
        <Contact data={{ title: data.strapiHomePageV2.contact_heading }} />
        <Footer />

    </div>);
}

export default Partners;