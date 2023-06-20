import React from 'react';
import MarkdownView from "react-showdown";
import { PartnerBox } from "../PartnerCard"

import Popup from '../Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';

function Content({ members, title }) {

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                    <div className="flex justify-between">
                        <div className="">
                            <MarkdownView markdown={title} />
                        </div>
                       
                    </div>
                </div>
                <div className="pt-[50px]">
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {members?.map((item,index) => { return (
                            <div 
                                key={item.strapi_id}
                                onClick={() => setSelectedItem(item)}
                                className='shadow rounded-xl mx-auto max-w-[300px] cursor-pointer  hover:shadow-red-200 hover:shadow-md'
                                >
                                {PartnerBox(item)}
                            </div>
                        ) })}
                    </div>
                </div>
            </div>
        </div>
        <Popup 
            onClose={() => setSelectedItem(null)} 
            isOpen={selectedItem}
            heading={selectedItem?.name || ""}
            >
                {
                   selectedItem && <PopupContent item={selectedItem} /> 
                }
        </Popup>
    </div>);
}

export default Content;