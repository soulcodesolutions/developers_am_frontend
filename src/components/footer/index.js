import React from "react";
// import Logo from "../../images/Logo.webp"
import Logo from "../../images/logo_arm.png"
import Logo2 from "../../images/logo_eng.png"
import { Link } from "gatsby";
import { getNavLinks } from "../navbar";

import Bg from '../../images/home/bg.jpg'
import Friday from '../../images/friday.png'


import ContactCard from '../home/ContactCard';
import { changeWordTo } from "../translation_custom";
import MarkdownView from "react-showdown";





function Footer({ language, data }) {
    // console.log(language, "from footer")
    const navlinks = getNavLinks(language);

    // console.log(data)


    return (
        <div
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundPosition: "center"
            }}
            className=" bg-cover bg-top bg-fixed_"
        >
            <div className="lolipop"></div>
            <div className="w-full bg-slate-800/90 backdrop-blur-sm">
                <div className="container mx-auto pt-[50px] sm:pt-[50px] pb-[0px]">
                    <div className="flex flex-wrap  justify-between items-start ">

                        <div className="w-full xl:max-w-[750px] order-2 xl:order-1 pt-[50px] xl:pt-[0px] pb-[20px]">

                            <div className="flex flex-wrap w-full  justify-between ">

                                <div className="w-full sm:w-fit  pt-[20px] sm:pt-0 items-center order-1 ">

                                    <div className="bg-white rounded p-[10px]">
                                        <Link to="/">
                                            <div className="flex items-center w-fit mx-auto _sm:mx-0 ">

                                                <div className="logo  _mr-[20px]">
                                                    {
                                                        language === "hy-AM" ?
                                                            <img src={Logo} alt="" style={{ height: "50px" }} />
                                                            :
                                                            <img src={Logo2} alt="" style={{ height: "50px" }} />
                                                    }
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="pt-[20px] flex w-full border-t mt-[20px] justify-center xl:justify-start ">
                                        {/* facebook */}
                                        <div className="w-fit mr-[20px]">
                                            <a href=" https://www.facebook.com/armeniandevelopersngo" target="_blank">
                                                <div className="w-fit">

                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-fit mr-[20px]">
                                            <a href=" https://www.youtube.com/@armeniandevelopers/featured" target="_blank" >
                                                <div className="w-fit">


                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" /></svg>
                                                </div>
                                            </a>
                                            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" /></svg> */}
                                        </div>
                                         <div className="w-fit mr-[20px]">
                                            <a href="https://www.instagram.com/developers_association_/" target="_blank" >
                                                <div className="w-fit">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="w-fit mr-[20px]">
                                            <a href="https://www.linkedin.com/company/armenian-association-of-developers-ngo/" target="_blank" >
                                                <div className="w-fit">
                                                    <svg xmlns="http://www.w3.org/2000/svg"  fill="white" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z"/></svg>
                                                </div>
                                            </a>
                                        </div>
                                    </div>



                                </div>



                                <div className="w-full sm:w-fit pt-[30px] sm:pt-0 px-[10px] flex flex-col text-white text-[12px] text-center sm:text-left order-1 sm:order-2">
                                    <div className="text-[16px] pb-[20px]">
                                        {changeWordTo("Overview", language)} 
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

                                    </div>

                                </div>

                                <div className="w-full sm:w-fit pt-[30px] px-[10px] sm:pt-0 text-[12px] flex flex-col text-white text-center sm:text-left order-2 sm:order-3">
                                    <div className="text-[16px] pb-[20px]">
                                        {changeWordTo("Contact us", language)}
                                    </div>
                                    {/* <div className="phone">+374 98513233</div> */}
                                    <div className="max-w-[250px] mx-auto">
                                        <MarkdownView markdown={data?.Footer?.address} />
                                       
                                    </div>
                                    <div className="phone ">
                                        
                                        <MarkdownView markdown={data?.Footer?.phone} />
                                        {/* {data?.Footer?.phone} */}
                                    </div>
                                    <div className="phone">
                                        info@developers.am
                                    </div>

                                    <div className="text-[16px] pt-[20px] pb-[10px]">
                                        Developed by
                                    </div>
                                    <div className="flex justify-center sm:justify-start">
                                        <a href="https://www.instagram.com/friday_marketing_/" target="_blank">

                                        <img src={Friday} className="w-[100px]" alt="" />
                                        </a>
                                    </div>

                                </div>



                            </div>





                        </div>
                        <div className="w-full xl:w-fit order-1 xl:order-2" >
                            <div className="w-full sm:min-w-[400px] xl:translate-y-[-20px] relative  pb-[20px]">
                                <ContactCard className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full sm:min-w-[400px]" language={language} />
                            </div>
                        </div>




                    </div>
                </div>
                <div className="bg-black py-[20px] text-[12px] text-center text-white">
                    Copyright © 2023
                </div>

            </div>
        </div>
    );
}

export default Footer;