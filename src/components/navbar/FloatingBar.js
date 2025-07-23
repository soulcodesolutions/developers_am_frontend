import React from "react";
// import Logo from "../../images/Logo.webp"
import Logo from "../../images/logo_arm.png"
import Logo2 from "../../images/logo_eng.png"
import { Link } from "gatsby";
import { languages } from "../home/Home";
import MarkdownView from "react-showdown";

export const SwithLangDisplay = (_string) => {

    if (_string == "hy-AM") {
        return "AM"
    }
    return _string
}

const FloatingBar = ({ navlinks = [], openSideBar, location, language, data }) => {
    
    
    const isActiveLanguage = (l) => {
    
        if(location.pathname.split('/')[1] === l){
            return true
        }
        return false
    }

    const getLinkURL = (l) => {
        if(typeof window !== 'undefined'){
            return `${location.pathname.replace(`/${language}`, `/${l}`)}${window.location.hash.substring(1) ? `#${window.location.hash.substring(1)}` : '#i'}`
        }
        return ""
    }

    const ChangeLangButton = () => {

        return (<div className="inline-block ml-[20px]   relative uppercase group cursor-pointer">
            <div className="font-bold text-red-500" >
                {SwithLangDisplay(language)}
            </div>
            <div className="absolute invisible group-hover:visible">
                <div className="   top-[30px] bg-white shadow rounded-xl overflow-hidden right-[10px]">
                    {languages.map(l => {
                        return (
                            <Link
                                key={l}
                                className={`inline-block min-w-[80px] text-center hover:bg-red-300 ${isActiveLanguage(l)? "text-red-800  font-bold bg-red-100" : ""}`}
                                to={getLinkURL(l)}
                                // activeClassName="text-red-800  font-bold bg-red-100"
                                aria-disabled={l === language}
                            >
                                {SwithLangDisplay(l)}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </div>)
    }

    return (<div>
        <div className="w-full fixed top-0 left-0 bg-white/60 backdrop-blur-3xl	 py-[10px] px-[10px] md:px-0 drop-shadow-xl z-[100]">
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={`/${language}/home`}>
                            <div className="nav flex items-center">
                                {
                                    language === "hy-AM" ? <img alt="" src={Logo} className="h-fit" style={{ height : "60px"}} /> : <img alt="" src={Logo2} className="h-fit" style={{ height : "60px"}} />
                                }
                                
                            </div>
                        </Link>
                    </div>
                    <div className="nav-menu hidden xl:block text-[14px] 2xl:text-[16px]">

                        {navlinks.map(item => {
                            return (<Link
                                key={item.id}
                                className="inline-block ml-[20px]"
                                to={item.link}
                                activeClassName="text-red-800  font-bold"
                            >
                                {item.lable}
                            </Link>);
                        })}
                        <ChangeLangButton />
                    </div>
                    <div className="burger_button block xl:hidden">
                        <div onClick={() => openSideBar()} className="w-fit cursor-pointer">

                            <svg
                                clip-rule="evenodd"
                                fill-rule="evenodd"
                                stroke-linejoin="round"
                                stroke-miterlimit="2"
                                viewBox="0 0 24 24"
                                className="h-[30px] w-[30px]"
                                xmlns="http://www.w3.org/2000/svg"
                            ><path d="m22 16.75c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75zm0-5c0-.414-.336-.75-.75-.75h-18.5c-.414 0-.75.336-.75.75s.336.75.75.75h18.5c.414 0 .75-.336.75-.75z" fill-rule="nonzero" /></svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);

};

export default FloatingBar;