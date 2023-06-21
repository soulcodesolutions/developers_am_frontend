import React from "react";
import Logo from "../../images/Logo.webp"
import { Link } from "gatsby";
import { getNavLinks } from "../navbar";


function Footer({ language }) {
    const navlinks = getNavLinks(language);
    return (<div className="w-full bg-slate-800">
        <div className="container mx-auto pt-[50px] sm:pt-[50px] pb-[30px]">
            <div className="flex flex-wrap sm:flex-nowrap justify-between items-start">

                <div className="w-full sm:w-fit  pt-[20px] sm:pt-0  items-center items-center order-1">
                    <div>
                    <Link to="/">
                    <div className="flex items-center w-fit mx-auto sm:mx-0">

                        <div className="logo mr-[20px]">
                            <img src={Logo} alt="" />
                        </div>
                        <div className="text-white text-[10px] font-bold"> ԿԱՌՈՒՑԱՊԱՏՈՂՆԵՐԻ <br />ԱՍՈՑԻԱՑԻԱ</div>
                    </div>
                    </Link>
                    </div>

                    <div className="pt-[30px]">

                    </div>

                </div>

                <div className="w-full sm:w-fit pt-[30px] sm:pt-0 text-[12px] flex flex-col text-white text-center sm:text-left order-2 sm:order-3">
                    <div className="text-[16px] pb-[20px]">
                        Contact
                    </div>
                    <div className="phone">+374 98513233</div>
                    <div className="phone">gurgengrigoryan@developers.am</div>
                    <div className="pt-[20px]">
                        <div className="w-fit mx-auto sm:mx-0">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-fit pt-[30px] sm:pt-0 flex flex-col text-white text-[12px] text-center sm:text-left order-3 sm:order-2">
                    <div className="text-[16px] pb-[20px]">
                        Overview
                    </div>
                    <div className="">
                        {navlinks?.map(item => (
                            <div key={item?.id} className="phone pb-[10px]">
                                <Link to={`${item?.link}`}>
                                 {item?.lable} 
                                </Link>
                            </div>)
                            )
                        }
                        {/* <div className="phone pb-[10px]"> Home </div>
                        <div className="phone pb-[10px]"> About </div>
                        <div className="phone pb-[10px]"> Association Council </div>
                        <div className="phone pb-[10px]"> Association Members </div>
                        <div className="phone pb-[10px]"> Partners </div> */}
                    </div>

                </div>



            </div>
        </div>
        <div className="bg-black py-[20px] text-[12px] text-center text-white">
            copyright © 2023
        </div>

    </div>);
}

export default Footer;