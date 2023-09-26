import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../home/Home';



export default function Council({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar location={location} language={language} />
        <Content members={data.allStrapiCouncil.nodes} title={data.strapiHomePageV2.council_heading} language={language} location={location} />
        {/* <Contact data={{ title: data.strapiHomePageV2.contact_heading }} /> */}
        <Footer data={{ title: data.strapiHomePageV2.contact_heading }} language={language} />

    </div>);
}