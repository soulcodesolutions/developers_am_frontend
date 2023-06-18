import React,{useState} from "react";

import FloatingBar from "./FloatingBar";
import SideBar from "./SideBar";


export function getNavLinks(language) {
    return [
        {
            id: 3,
            lable: "Association council",
            link: `/${language}/associationCouncil`,
        },
        {
            id: 4,
            lable: "Association members",
            link: `/${language}/associationMembers`,
        },
        {
            id: 5,
            lable: "Our partners",
            link: `/${language}/OurPartners`,
        },
        {
            id: 5,
            lable: "News",
            link: `/${language}/news`,
        },
        {
            id: 5,
            lable: "Useful links",
            link: `/${language}/usefullLinks`,
        },
    ]
}

function Navbar({ location, language }) {
    const navlinks = getNavLinks(language);

    const [open, setOpen] = useState(false)

    const openSideBar = () => {
        setOpen(true)
    }

    const closeSidebar = () => {
        setOpen(false)
    }


    return (<div>
        <FloatingBar navlinks={navlinks} openSideBar={openSideBar} location={location} language={language} />
        <SideBar navlinks={navlinks} open={open}  closeSidebar={closeSidebar} />
    </div>);
}


export default Navbar;