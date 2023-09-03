import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../footer';
import Navbar from '../navbar';
import { languages } from '../home/Home';


function Members({ location, data }) {
    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)) {
        language = "en";
    }
    return (<div>
        <Navbar location={location} language={language} />
        <Content members={data.allStrapiMember.nodes} title={data.strapiHomePageV2.members_heading} location={location} language={language} />
        {/* <Contact data={{ title: data.strapiHomePageV2.contact_heading }} /> */}
        <Footer language={language}  data={{ title: data.strapiHomePageV2.contact_heading }}  />

    </div>);
}

export default Members;