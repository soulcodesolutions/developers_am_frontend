import React from "react";
import MarkdownView from 'react-showdown';
import { JustAppear, SlideBottom, SlideLeft } from "../SlideAnimation";
import { ViewAll } from "../ViewAll";
import { Link } from "gatsby";
import NewsBox from "../NewsBox";
import Secondary from "../button/Secondary"
import { changeWordTo } from "../translation_custom";

export default function News({ data, language }) {

    // console.log(data)


    return (
        <div id="news" className="py-[50px] bg-white">
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between items-center">
                    <div className="text-[24px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                        <SlideLeft>
                            <MarkdownView markdown={data?.title} />
                        </SlideLeft>
                    </div>
                    <ViewAll to={`/${language}/news`} language={language} />
                </div>
                <div className="pt-[50px]">
                    <JustAppear>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                            {data?.members?.map(item =>
                                <NewsBox key={item.strapi_id} item={item} language={language} />
                            )}
                        </div>
                    </JustAppear>
                    <div className="pt-[50px]">
                        <SlideBottom>
                            <Link to={`/${language}/news`}>
                                <Secondary className="max-w-[250px] mx-auto" label={ changeWordTo("View more", language)} />
                            </Link>
                        </SlideBottom>
                    </div>
                </div>
            </div>
        </div>
    );
}