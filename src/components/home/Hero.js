import React from "react";
import MarkdownView from 'react-showdown'
// import Bg from '../../images/home/bg2.png'
// import Bg_mobile from '../../images/home/bg_mobile.jpg'
import Primary from '../button/Primary'
import { JustAppear, SlideLeft, SlideRight } from "../SlideAnimation";
import { changeWordTo } from "../translation_custom";
import Welcome from "./Welcome";


export default function Hero({ data, data2, language }) {

    const handleButtonClick = () => {
        let elem = document.getElementById("contact")
        if (elem) {
            elem.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <>
            <div className="h-[20px]  sm:h-[80px] xl:h-0"></div>

            <div className="bg-cover bg-no-repeat sm:bg-cover sm:bg-fixed    bg-[url(/images/bg14.png)] bg-top  sm:bg-top mx-auto h-[1200px] sm:h-[1000px] xl:h-[100vh] xl:min-h-[700px]  xl:max-h-[850px]  ">
                <div className="h-full bg-black/40">

                    <div className="w-full h-full   flex flex-col items-center justify-end pt-[50px] max-h-[200px]   xl:pt-[20px] xl:max-h-[220px]  ">
                        <div className="container mx-auto _py-[50px]  ">
                            <div className="_subhead text-[14px] sm:text-[24px]  lg:text-[28px] text-white _text-red-800   text-center ">
                                <SlideRight >
                                    <MarkdownView markdown={data.sub_heading} />
                                </SlideRight>
                            </div>
                            <div className="_hero-text text-[14px] sm:text-[20px] lg:text-[20px] py-[10px]  text-white text-center">
                                <SlideLeft >

                                    <MarkdownView markdown={data.hero_text} />
                                </SlideLeft>
                            </div>
                            {/* <div className="py-[20px] mx-auto w-fit">
                            <JustAppear>
                                <Primary
                                    onClick={() => handleButtonClick()}
                                    label={changeWordTo("Contact us", language)} className="max-w-[300px] cursor-pointer" />
                            </JustAppear>
                        </div> */}
                        </div>
                    </div>
                    <Welcome data={data2} />
                </div>

            </div>
            {/* </div> */}

        </>
    )


}