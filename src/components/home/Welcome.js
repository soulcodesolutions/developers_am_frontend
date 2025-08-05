import React from "react";
import MarkdownView from "react-showdown";
import WelcomeImage from "../../images/home/welcome2.png";
import { JustAppear, SlideLeft } from "../SlideAnimation";

export default function Welcome({ data, language }) {
    // console.log(data)
    function getLanguageCode(locale) {
        return locale.split('-')[0];
    }

    return (
        <div id="aboutus" className="pt-[50px] px-[30px] sm:px-[20px]  xl:pt-[20px] _py-[30px] relative  ">
            {/* <div className="xl:absolute bottom-[30px] w-full"> */}
                <div className="  max-w-[1200px] relative mx-auto bg-white/60 backdrop-blur-lg p-[10px] md:p-[30px]    sm:drop-shadow-2xl shadow rounded-[10px]">
                    <div className="hidden xl:block right-0 absolute top-[-10px]">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="brown" viewBox="0 0 24 24"><path d="M13.514 2.444l-10.815 10.785c-.449.449-.678 1.074-.625 1.707l.393 4.696c.041.479.422.86.9.9l4.697.394c.633.053 1.258-.177 1.707-.626l11.875-11.844c.196-.196.195-.512 0-.707l-3.536-3.536c-.195-.195-.511-.196-.707 0l-8.878 8.848c-.162.162-.253.382-.253.611v.725c0 .184.148.332.332.332h.725c.229 0 .448-.092.61-.254l7.11-7.08 1.415 1.415-7.386 7.354c-.375.375-.885.586-1.414.586h-2.414c-.555 0-1-.448-1-1v-2.414c0-.53.211-1.039.586-1.414l9.506-9.477c.781-.781 2.049-.781 2.829-.001l4.243 4.243c.391.391.586.902.586 1.414 0 .512-.196 1.025-.587 1.416l-12.35 12.319c-.748.747-1.76 1.164-2.81 1.164-.257 0-6.243-.467-6.499-.487-.664-.052-1.212-.574-1.268-1.267-.019-.242-.486-6.246-.486-6.499 0-1.05.416-2.062 1.164-2.811l10.936-10.936 1.414 1.444z" /></svg>
                    </div>
                    <div className="text-[16px] sm:text-[20px] xl:text-[20px] text-center sm:text-left xl:text-center font-bold text-red-800  ">
                        <SlideLeft>
                            {/* {console.log(data?.title)} */}
                            <MarkdownView markdown={data?.title} />
                        </SlideLeft>
                    </div>
                    <div className="px-[10px] sm:px-[10px] xl:px-[30px] pb-[20px]">
                        <div className="border-b "></div>
                    </div>
                    <div className=" content pt-[50px] sm:pt-[10px]">
                        <div className="flex flex-wrap xl:flex-nowrap sm:h-fit  justify-center ">
                            <div className="  w-full xl:w-fit   flex flex-col xl:items-center justify-center   ">

                                <div className="  ">
                                    <img src={WelcomeImage} className=" h-full w-content max-h-[200px] sm:max-h-[280px] rounded-xl mx-auto sm:ml-0  " alt="" />
                                </div>

                            </div>
                            <div className="w-full text-[14px]  px-[20px]  pt-[50px] xl:pt-[15px] xl:pl-[50px] xl:max-w-[810px] overflow-hidden _text-center sm:text-left  ">
                                <JustAppear>
                                    <MarkdownView markdown={data?.content} lang={getLanguageCode(language)} className="text-justify hyphens-auto" />
                                </JustAppear>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </div> */}
        </div >);
}