import React from "react";
import Logo from "../../images/Logo.webp"
import { Link } from "gatsby";
import { languages } from "../home/Home";

 const FloatingBar = ({ navlinks = [], openSideBar, location, language }) => {

    return (<div>
        <div className="w-full fixed top-0 left-0 bg-white py-[20px] px-[10px] drop-shadow-xl z-[100]">
            <div className="container mx-auto">

                <div className="flex justify-between items-center">
                    <div>
                        <Link to={`/${language}/home`}>
                            <div className="nav flex items-center">
                                <img alt="" src={Logo} className="h-fit" />
                                <div className="text-[10px] ml-[20px] text-sky-900 font-bold">
                                    ԿԱՌՈՒՑԱՊԱՏՈՂՆԵՐԻ <br />ԱՍՈՑԻԱՑԻԱ
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="nav-menu hidden lg:block">
                        {languages.map(l => {
                            return (
                                <Link
                                key={l}
                                className="inline-block ml-[10px]"
                                to={location.pathname.replace(`/${language}`, `/${l}`)}
                                activeClassName="text-red-800  font-bold"
                                aria-disabled={l===language}
                                >
                                    {l}
                                </Link>
                            )
                        })}
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
                    </div>
                    <div className="block lg:hidden">
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