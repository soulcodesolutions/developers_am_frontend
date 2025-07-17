import React from "react";
import MarkdownView from "react-showdown";
import AboutImage from "../../images/home/about.png";
import { JustAppear, SlideLeft } from "../SlideAnimation";
import { customRenderer } from "../usefullFunctions";

export default function AboutUs({ data }) {
    console.log(data)
    return (
        <div id="aboutus" className="pt-[50px] sm:pt-[100px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[24px]  sm:text-[28px] xl:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <SlideLeft>
                        <MarkdownView markdown={data?.title} />
                    </SlideLeft>
                </div>
                <div className="content pt-[50px] sm:pt-[50px]">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full sm:w-1/2 flex  flex-col _items-center justify-center   ">
                            <div className="_h-fit w-full ">

                            <SlideLeft>
                                <img src={AboutImage} className="w-full sm:max-w-[500px] rounded-xl  mx-auto sm:ml-0" alt="" />
                            </SlideLeft>
                            </div>
                        </div>
                        <div className="w-full xl:w-1/2 pt-[50px] xl:pt-[0px] max-w-fit overflow-hidden _text-center sm:text-left ">
                            <JustAppear>
                                <MarkdownView 
                                    markdown={customRenderer(data?.content || "")}
                                    options={{
                                        openLinksInNewWindow: true,
                                        simplifiedAutoLink: true,
                                        simpleLineBreaks : true
                                    }}
                                    className="text-justify"
                                    />
                            </JustAppear>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
}