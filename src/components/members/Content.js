import React from 'react';
import MarkdownView from "react-showdown";
import { CompanyBox } from "./CompanyCard"
import Popup from '../Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';

function Content({ members, title }) {

    const [selectedItem, setSelectedItem] = useState(null)

    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="text-[20px] sm:text-[40px] text-center sm:text-left  font-bold text-red-800">
                    <   MarkdownView markdown={title} />
                </div>
                <div className="pt-[50px]">
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {members?.map((item,index) => { return (
                            <div 
                                key={item.strapi_id}
                                onClick={() => setSelectedItem(item)}

                                >
                                {CompanyBox(item)}
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