import React from "react";
import MarkdownView from "react-showdown";
import AboutImage from "../../images/home/about.png";
import { JustAppear, SlideLeft } from "../SlideAnimation";
import { customRenderer } from "../usefullFunctions";

export default function AboutUs({ data, language }) {
    function getLanguageCode(locale) {
        return locale.split('-')[0];
    }
    return (
        <div id="aboutus" className="pt-[50px] sm:pt-[100px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[20px]  sm:text-[28px] xl:text-[28px] text-center sm:text-left font-bold text-red-800">
                    <SlideLeft>
                        <MarkdownView markdown={data?.title} />
                    </SlideLeft>
                </div>
                <div className="content pt-[50px] sm:pt-[50px]">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/2 flex  flex-col _items-center justify-center   ">
                            <div className="_h-fit w-full ">

                            <SlideLeft>
                                <img src={AboutImage} className="w-full sm:max-w-[450px] rounded-xl  mx-auto sm:ml-0" alt="" />
                            </SlideLeft>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 px-[10px] pt-[50px] text-[14px] xl:pt-[10px] max-w-fit overflow-hidden _text-center sm:text-left ">
                            <JustAppear>
                                <MarkdownView 
                                    lang={getLanguageCode(language)}
                                    markdown={customRenderer(data?.content || "")}
                                    options={{
                                        openLinksInNewWindow: true,
                                        simplifiedAutoLink: true,
                                        simpleLineBreaks : true
                                    }}
                                    className="text-justify "
                                    />
                            </JustAppear>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}