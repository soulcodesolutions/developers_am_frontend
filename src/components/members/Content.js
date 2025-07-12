import React, { useEffect } from 'react';
import MarkdownView from "react-showdown";
import { CompanyBox } from "./CompanyCard"
import Popup from '../Popup';
import { useState } from 'react';
import PopupContent from './PopupContent';
import { GoBack } from '../ViewAll';

// import { useQueryParam, NumberParam, StringParam } from "use-query-params";
// import { useSearchParams } from "react-router-dom"; 

function Content({ members, title, location, second_title, third_title, language }) {

    const [selectedItem, setSelectedItem] = useState(null)
    // const [strapiId, setstrapiId] = useQueryParam("strapiId", NumberParam);

    const params = new URLSearchParams(location.search);
    const strapiId = params.get("strapiId");


    // alert(parameter1)

    useEffect(() => {
        if (strapiId) {
            const result = members?.find(item => item?.strapi_id == strapiId)
            setSelectedItem(result)
        }
    }, [strapiId])

    const [selectedTab, setSelectedTab] = useState(second_title)


    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-center sm:justify-start space-x-[20px] sm:space-x-[50px] items-center  " >
                    <div
                        onClick={() => setSelectedTab(second_title)}
                        className={` text-[20px]  text-center sm:text-left font-bold  cursor-pointer ${selectedTab === second_title ? "text-red-800 underline underline-offset-8" : ""}`}
                        >
                        <   MarkdownView markdown={second_title} />
                    </div>
                    <div 
                        onClick={() => setSelectedTab(third_title)}
                        className={` text-[20px]  text-center sm:text-left font-bold  cursor-pointer ${selectedTab === third_title ? "text-red-800 underline underline-offset-8" : ""}`}
                        >
                        <   MarkdownView markdown={third_title} />
                    </div>
                    
                </div>
                {
                    selectedTab == second_title ?
                    <div className="pt-[50px]">
                        <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                            {members?.filter(item => !item?.hide_in_website && !item?.associated_member)?.map((item, index) => {
                                return (
                                    <div
                                        key={item.strapi_id}
                                        onClick={() => setSelectedItem(item)}

                                    >
                                        {CompanyBox(item, language)}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    :
                    null

                }
                {
                    selectedTab == third_title?
                    <div className="grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] mt-[50px]">
                        {members?.filter(item => (!item?.hide_in_website && item.associated_member === true))?.map((item, index) => {
                            return (
                                <div
                                    key={item.strapi_id}
                                    onClick={() => setSelectedItem(item)}

                                >
                                    {CompanyBox(item, language)}
                                </div>
                            )
                        })}
                    </div>
                    :
                    null

                }
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