import React from 'react';


import Navbar from "../navbar"
import Footer from "../footer";

import Content from './Content';

import Contact  from '../home/Contact';

export const languages = ["en", "hy-AM"];


function usefullLinks({ location, data }) {

    let language = location.pathname.split('/')[1];
    if (!languages.includes(language)){
        language = "en";
    }

    data = data?.strapiUsefullLink || {};

    return (  <div>
         <Navbar language={language} location={location} />
        <Content data={data} />
        <Contact />
        <Footer />
    </div>);
}

export default usefullLinks;