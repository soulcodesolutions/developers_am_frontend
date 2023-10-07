import React from "react";
import MarkdownView from 'react-showdown'
import Bg from '../../images/home/bg.jpg'
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

    return (<div
        style={{
            backgroundImage: `url(${Bg})`
        }}
        className="h-[100vh] bg-cover bg-top bg-fixed_"
    >

        <div className="w-full h-screen flex flex-col items-center justify-center backdrop-blur-sm bg-white/10">
            <div className="container mx-auto">
                <div className="subhead text-[18px] sm:text-[30px] text-red-800  max-w-[800px]">
                    <SlideRight >
                        <MarkdownView markdown={data.sub_heading} />
                    </SlideRight>
                </div>
                <div className="hero-text text-[24px] sm:text-[50px] py-[10px] max-w-[800px]">
                    <SlideLeft >

                        <MarkdownView markdown={data.hero_text} />
                    </SlideLeft>
                </div>
                <div className="py-[20px]">
                    <JustAppear>
                        <Primary 
                            onClick={handleButtonClick}
                            label={changeWordTo("Contact us", language)} className="max-w-[300px] cursor-pointer" />
                    </JustAppear>
                </div>
            </div>
        </div>
    </div>);
}