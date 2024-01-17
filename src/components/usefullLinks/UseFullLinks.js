import React from 'react';


import Navbar from "../navbar"
import Footer from "../footer";

import Content from './Content';

// import Contact  from '../home/Contact';

export const languages = ["en", "hy-AM", "ru"];


function usefullLinks({ location, data }) {

    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)){
        language = "en";
    }

    // data = data?.strapiUsefullLink || {};

    return (  <div>
         <Navbar data={{ logo : data.strapiHomePageV2.logo }} language={language} location={location} />
        <Content data={data?.strapiUsefullLink || {}} language={language} />
        {/* <Contact /> */}
        <Footer  language={language} data={{ Footer : data.strapiHomePageV2.Footer, logo : data.strapiHomePageV2.logo }}  />
    </div>);
}

export default usefullLinks;