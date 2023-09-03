import React from "react";
import MarkdownView from 'react-showdown';
import { JustAppear, SlideLeft } from "../SlideAnimation";
import { ViewAll } from "../ViewAll";
import { UserCard } from "../UserBox";


export default function Council({ data, language="en" }) {

    return (
        <div className="py-[50px] bg-slate-100">
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between items-center">

                    <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                        <SlideLeft>
                            <MarkdownView markdown={data?.title} />
                        </SlideLeft>
                    </div>
                    <ViewAll to={`/${language}/council`} />
                </div>
                <div className="pt-[50px]">
                    <div className="">
                        <JustAppear>
                            <UserCard items={data?.members} language={language} />
                        </JustAppear>
                    </div>
                    <div className="pt-[50px] w-full ">
                    </div>
                </div>
            </div>
        </div>
    );
}