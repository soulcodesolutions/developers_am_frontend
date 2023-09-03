import React,{useState} from "react";

import FloatingBar from "./FloatingBar";
import SideBar from "./SideBar";


export function getNavLinks(language) {

    if(language === "ru"){

        return [
            {
                id: 3,
                lable: "Совет ассоциации",
                link: `/${language}/council`,
            },
            {
                id: 4,
                lable: "Члены ассоциации",
                link: `/${language}/members`,
            },
            {
                id: 5,
                lable: "Наши партнеры",
                link: `/${language}/partners`,
            },
            {
                id: 5,
                lable: "Новости",
                link: `/${language}/news`,
            },
            {
                id: 5,
                lable: "Полезные ссылки",
                link: `/${language}/usefullLinks`,
            },
        ]
        
    } else if(language === "hy-AM"){

        return [
            {
                id: 3,
                lable: "Ասոցիացիայի խորհուրդl",
                link: `/${language}/council`,
            },
            {
                id: 4,
                lable: "Ասոցիացիայի անդամներ",
                link: `/${language}/members`,
            },
            {
                id: 5,
                lable: "Մեր գործընկերները",
                link: `/${language}/partners`,
            },
            {
                id: 5,
                lable: "Նորություններ",
                link: `/${language}/news`,
            },
            {
                id: 5,
                lable: "Օգտակար հղումներ",
                link: `/${language}/usefullLinks`,
            },
        ]
    } else {

        return [
            {
                id: 3,
                lable: "Association council",
                link: `/${language}/council`,
            },
            {
                id: 4,
                lable: "Association members",
                link: `/${language}/members`,
            },
            {
                id: 5,
                lable: "Our partners",
                link: `/${language}/partners`,
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
        <SideBar navlinks={navlinks} open={open}  closeSidebar={closeSidebar} location={location} language={language} />
    </div>);
}


export default Navbar;