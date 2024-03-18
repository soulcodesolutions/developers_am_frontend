import React from 'react';
import MarkdownView from "react-showdown";
import { useState } from 'react';
import NewsBox from '../NewsBox';
import { GoBack } from '../ViewAll';
import { customRenderer } from '../usefullFunctions';

function Content({ members, title, language }) {

    const [selectedItem, setSelectedItem] = useState(null)

    // console.log(members?.filter(item => item?.hide_in_website !== false))

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
            <div className="flex justify-center sm:justify-between items-center">
                    <div className="order-2 sm:order-1 text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800 ">
                        <   MarkdownView markdown={customRenderer(title || "")} />
                    </div>
                    <div className='order-1 sm:order-2'>

                        {/* <GoBack language={language} hash='news' /> */}
                    </div>
                </div>
                <div className="pt-[50px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {members?.filter(item => !item?.hide_in_website)?.map((item,index) => { return (
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