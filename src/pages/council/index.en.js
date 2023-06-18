import React from 'react';
import Content from './Content';
import Contact from '../home/Contact';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';



function Council() {
    return ( <div>
        <Navbar />
        <Content />
        <Contact />
        <Footer />
        
    </div> );
}

export default Council;