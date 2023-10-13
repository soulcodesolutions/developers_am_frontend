import React from 'react';
import MarkdownView from "react-showdown";
import { useState } from 'react';
import NewsBox from '../NewsBox';
import { GoBack } from '../ViewAll';

function Content({ members, title, language }) {

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
            <div className="flex justify-center sm:justify-between items-center">
                    <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800 ">
                        <   MarkdownView markdown={title} />
                    </div>
                    <div>

                        <GoBack language={language} />
                    </div>
                </div>
                <div className="pt-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {members?.map((item,index) => { return (
                            <div 
                                key={item.strapi_id}
                                onClick={() => setSelectedItem(item)}
                                className=' '
                                >
                                <NewsBox  item={item} language={language} />
                            </div>
                        ) })}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Content;