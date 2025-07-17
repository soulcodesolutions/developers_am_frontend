import React from "react";
import MarkdownView from 'react-showdown'
// import Bg from '../../images/home/bg2.png'
// import Bg_mobile from '../../images/home/bg_mobile.jpg'
import Primary from '../button/Primary'
import { JustAppear, SlideLeft, SlideRight } from "../SlideAnimation";
import { changeWordTo } from "../translation_custom";

export default function Hero({ data, language }) {

    const handleButtonClick = () => {
        let elem = document.getElementById("contact")
            if (elem) {
                elem.scrollIntoView({behavior: "smooth"})
            }
    }

    return (
    <>
    <div className="h-[100px]  sm:h-[100px] xl:h-0"></div>
    {/* <div  className=" bg-cover  _bg-[url(/images/bg45.png)]    "> */}

    <div 
            style={{
                // backgroundPosition : "0px -300px"
            }}
            className="bg-cover sm:bg-fixed  _bg-[url(/images/bg4.png)] bg-[url(/images/bg4.png)] bg-center   sm:bg-[center_-100px] mx-auto h-[300px] sm:h-[300px] xl:h-[calc(100vh-100px)]">
        <div className="w-full h-full   flex flex-col items-center justify-center pt-[50px]  xl:pt-[150px] xl:max-h-[400px]">
            <div className="container mx-auto py-[50px] ">
                <div className="_subhead text-[14px] sm:text-[24px]  lg:text-[35px] text-white _text-red-800   text-center ">
                    <SlideRight >
                        <MarkdownView markdown={data.sub_heading} />
                    </SlideRight>
                </div>
                <div className="_hero-text text-[14px] sm:text-[20px] lg:text-[20px] py-[10px]  text-white text-center">
                    <SlideLeft >

                        <MarkdownView markdown={data.hero_text} />
                    </SlideLeft>
                </div>
                <div className="py-[20px] mx-auto w-fit">
                    <JustAppear>
                        <Primary 
                            onClick={() => handleButtonClick()}
                            label={changeWordTo("Contact us", language)} className="max-w-[300px] cursor-pointer" />
                    </JustAppear>
                </div>
            </div>
        </div>
    </div>
    {/* </div> */}

    </>
    )

    
}