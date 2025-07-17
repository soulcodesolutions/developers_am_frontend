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
    {/* <div className="h-[100px]"></div> */}
    {/* <div  className=" bg-cover  _bg-[url(/images/bg45.png)]    "> */}

    <div 
            style={{
                // backgroundPosition : "0px -300px"
            }}
            className=" bg-cover  _bg-[url(/images/bg_mobile.png)] _sm:bg-[url(/images/bg2.png)] bg-[url(/images/bg4.png)]   sm:bg-[center_-250px] mx-auto  h-[calc(100vh-100px)]">
        <div className="w-full h-full max-h-[600px] flex flex-col items-center justify-center _backdrop-blur-sm _bg-black/10 ">
            <div className="container mx-auto py-[50px] ">
                <div className="_subhead text-[14px] sm:text-[24px]  lg:text-[35px] text-white _text-red-800  _max-w-[800px] text-center ">
                    <SlideRight >
                        <MarkdownView markdown={data.sub_heading} />
                    </SlideRight>
                </div>
                <div className="_hero-text text-[14px] sm:text-[20px] lg:text-[20px] py-[10px] _max-w-[800px] text-white text-center">
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