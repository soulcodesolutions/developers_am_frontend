import React from "react";
import MarkdownView from 'react-showdown';
import { JustAppear, SlideLeft } from "../SlideAnimation";
import { ViewAll } from "../ViewAll";
import CompanyCard from "../members/CompanyCard";


export default function Members({ data, language }) {
    console.log('Members -> ', data)
    return (
        <div id="members" className="py-[50px] bg-white">
            <div className="container mx-auto relative">
                <div className="flex justify-center sm:justify-between items-center relative z-[22]">
                    <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                        <SlideLeft>
                            <MarkdownView markdown={data?.title} />
                        </SlideLeft>
                    </div>
                    <div className="">

                    <ViewAll to={`/${language}/members`} language={language} />
                    </div>
                </div>
                <div className="pt-[50px] ">
                    <JustAppear>
                        <CompanyCard items={data?.members} language={language} />
                    </JustAppear>
                </div>
            </div>
        </div>);
}