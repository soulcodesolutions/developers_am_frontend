import React,{useState} from "react";

import FloatingBar from "./FloatingBar";
import SideBar from "./SideBar";


export function getNavLinks(language) {

    if(language === "ru"){

        return [
            {
                id: 1,
                lable: "Главная",
                link: `/${language}/home`,
                onNavbar : false,
            },
            {
                id: 2,
                lable: "Մեր մասին",
                link: `/${language}/home#aboutus`,
                onNavbar : false,
            },
            {
                id: 3,
                lable: "Совет",
                link: `/${language}/council`,
                onNavbar : true,
            },
            {
                id: 8,
                lable: "Наша Команда",
                link: `/${language}/team`,
                onNavbar : true,
            },
            {
                id: 4,
                lable: "Члены",
                link: `/${language}/members`,
                onNavbar : true,
            },
            {
                id: 5,
                lable: "Партнеры",
                link: `/${language}/partners`,
                onNavbar : true,
            },
            {
                id: 6,
                lable: "Новости",
                link: `/${language}/news`,
                onNavbar : true,
            },
            {
                id: 7,
                lable: "Полезные ссылки",
                link: `/${language}/usefullLinks`,
                onNavbar : true,
            },
        ]
        
    } else if(language === "hy-AM"){

        return [
            {
                id: 1,
                lable: "Գլխավոր",
                link: `/${language}/home`,
                onNavbar : false,
            },
            {
                id: 2,
                lable: "Մեր մասին",
                link: `/${language}/home#aboutus`,
                onNavbar : false,
            },
            {
                id: 3,
                lable: "Խորհուրդ",
                link: `/${language}/council`,
                onNavbar : true,
            },
            
            {
                id: 8,
                lable: "Մեր թիմը",
                link: `/${language}/team`,
                onNavbar : true,
            },
            {
                id: 4,
                lable: "Անդամներ",
                link: `/${language}/members`,
                onNavbar : true,
            },
            {
                id: 5,
                lable: "Գործընկերներ",
                link: `/${language}/partners`,
                onNavbar : true,
            },
            {
                id: 6,
                lable: "Նորություններ",
                link: `/${language}/news`,
                onNavbar : true,
            },
            {
                id: 7,
                lable: "Օգտակար հղումներ",
                link: `/${language}/usefullLinks`,
                onNavbar : true,
            },
        ]
    } else {
        
        return [
            {
                id: 1,
                lable: "Home",
                link: `/${language}/home`,
                onNavbar : false,
            },
            {
                id: 2,
                lable: "About us",
                link: `/${language}/home#aboutus`,
                onNavbar : false,
            },
            {
                id: 3,
                lable: "Council",
                link: `/${language}/council`,
                onNavbar : true,
            },
            {
                id: 8,
                lable: "Our Team",
                link: `/${language}/team`,
                onNavbar : true,
            },
            {
                id: 4,
                lable: "Members",
                link: `/${language}/members`,
                onNavbar : true,
            },
            {
                id: 5,
                lable: "Partners",
                link: `/${language}/partners`,
                onNavbar : true,
            },
            {
                id: 6,
                lable: "News",
                link: `/${language}/news`,
                onNavbar : true,
            },
            {
                id: 7,
                lable: "Useful links",
                link: `/${language}/usefullLinks`,
                onNavbar : true,
            },
        ]
    }
}

function Navbar({ location, language, data }) {

    let navlinks = getNavLinks(language);
    navlinks = navlinks.filter(item => item.onNavbar === true)

    const [open, setOpen] = useState(false)

    const openSideBar = () => {
        setOpen(true)
    }

    const closeSidebar = () => {
        setOpen(false)
    }


    return (<div>
        <FloatingBar navlinks={navlinks} openSideBar={openSideBar} location={location} language={language} data={data} />
        <SideBar navlinks={navlinks} open={open}  closeSidebar={closeSidebar} location={location} language={language} />
    </div>);
}


export default Navbar;