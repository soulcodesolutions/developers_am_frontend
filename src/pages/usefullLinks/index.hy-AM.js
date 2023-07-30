import React from 'react';
import { graphql } from "gatsby";


import UsefullLinks from '../../components/usefullLinks/UseFullLinks';
// import Navbar from "../../components/navbar"
// import Footer from "../../components/footer";

// import Content from '../../components/usefullLinks/Content';

// import Contact  from '../../components/home/Contact';

function Index({ location, data = {} }) {
    return (<UsefullLinks data={data} location={location} />);
}

export default Index;


export const query = graphql`
query UsefullLinksQuery {
    strapiUsefullLink(locale: {eq: "hy-AM"}) {
        title
        legal_acts {
          label
          link
         pdf {
          url
         }
        }
        association_documents {
          label
          link
         pdf {
          url
         }
        }
        certifications {
          label
          link
         pdf {
          url
         }
        }
        usefull_links {
          label
          link
         pdf {
          url
         }
        }
      
    }
  }
`
