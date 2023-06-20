import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../../pages/home/index.en';



export default function Council({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar location={location} language={language} />
        <Content members={data.allStrapiCouncil.nodes} title={data.strapiHomePageV2.council_heading} />
        <Contact />
        <Footer />

    </div>);
}