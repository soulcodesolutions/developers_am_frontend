import React from 'react';
import MarkdownView from "react-showdown";
import PartnerCard from '../PartnerCard';
import { JustAppear, SlideLeft } from '../SlideAnimation';
import { ViewAll } from '../ViewAll';



export default function Partners({ data, language }) {
    return (
        <div className="pt-[50px] sm:pt-[100px] py-[50px] bg-slate-100">
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between items-center">
                    <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800 " >
                        <SlideLeft>
                            <MarkdownView markdown={data?.title} />
                        </SlideLeft>
                    </div>
                    <div>

                        <ViewAll to={`/${language}/partners`}  language={language}/>
                    </div>
                </div>
                <div className="content pt-[50px]">
                    <div className="grid grid-cols-2 sm:grid-cols-6 gap-[10px]">
                    </div>
                    <div className="">
                        <JustAppear>
                            <PartnerCard items={data?.members} language={language} />
                        </JustAppear>
                    </div>
                </div>
            </div>
        </div>);
}
