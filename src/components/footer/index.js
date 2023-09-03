import React from "react";
import Logo from "../../images/Logo.webp"
import { Link } from "gatsby";
import { getNavLinks } from "../navbar";

import Bg from '../../images/home/bg.jpg'
import Friday from '../../images/friday.png'


import ContactCard from '../home/ContactCard';





function Footer({ language }) {
    const navlinks = getNavLinks(language);


    return (
        <div
            style={{
                backgroundImage: `url(${Bg})`,
                backgroundPosition: "center"
            }}
            className=" bg-cover bg-top bg-fixed_"
        >
            <div className="w-full bg-slate-800/90 backdrop-blur-sm">
                <div className="container mx-auto pt-[50px] sm:pt-[50px] pb-[0px]">
                    <div className="flex flex-wrap  justify-between items-start ">

                        <div className="w-full xl:max-w-[750px] order-2 xl:order-1 pt-[50px] xl:pt-[0px] pb-[20px]">

                            <div className="flex flex-wrap w-full  justify-between ">

                                <div className="w-full sm:w-fit  pt-[20px] sm:pt-0 items-center order-1 ">

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
                                    </div>



                                </div>



                                <div className="w-full sm:w-fit pt-[30px] sm:pt-0 px-[10px] flex flex-col text-white text-[12px] text-center sm:text-left order-1 sm:order-2">
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

                                    </div>

                                </div>

                                <div className="w-full sm:w-fit pt-[30px] px-[10px] sm:pt-0 text-[12px] flex flex-col text-white text-center sm:text-left order-2 sm:order-3">
                                    <div className="text-[16px] pb-[20px]">
                                        Contact
                                    </div>
                                    <div className="phone">+374 98513233</div>
                                    <div className="phone">gurgengrigoryan@developers.am</div>
                                    <div className="text-[16px] pt-[20px] pb-[10px]">
                                        Developed by
                                    </div>
                                    <div className="flex justify-center sm:justify-start">
                                        <a href="https://fridaydd.com/" target="_blank">

                                        <img src={Friday} className="w-[100px]" alt="" />
                                        </a>
                                    </div>

                                </div>



                            </div>





                        </div>
                        <div className="w-full xl:w-fit order-1 xl:order-2" >
                            <div className="w-full sm:min-w-[400px] xl:translate-y-[-20px] relative  pb-[20px]">
                                <ContactCard className="drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] w-full sm:min-w-[400px]" />
                            </div>
                        </div>




                    </div>
                </div>
                <div className="bg-black py-[20px] text-[12px] text-center text-white">
                    copyright © 2023
                </div>

            </div>
        </div>
    );
}

export default Footer;