import React, { useEffect } from 'react';
import MarkdownView from "react-showdown";
import { useState } from 'react';
import UserBox from '../UserBox';
import Popup from '../Popup';
import PopupContent from './PopupContent';
import { GoBack } from '../ViewAll';

function Content({ title, members, language, location }) {

    const [selectedItem, setSelectedItem] = useState(null)

    const params = new URLSearchParams(location.search);
    const strapiId = params.get("strapiId");

    useEffect(() => {
        if (strapiId) {
            const result = members?.find(item => item?.strapi_id == strapiId)
            setSelectedItem(result)
        }
    }, [strapiId])


    return (<div>
        <div className="pt-[150px] py-[50px]">
            <div className="container mx-auto">
                <div className="flex justify-center sm:justify-between items-center">
                    <div className="order-2 sm:order-1 text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800 ">
                        <   MarkdownView markdown={title} />
                    </div>
                    <div className='order-1 sm:order-2'>

                        <GoBack  language={language} hash="council" />
                    </div>
                </div>
                <div className="pt-[50px]">
                    <div className="grid gird-cols-1  sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
                        {members?.filter(item => !item?.hide_in_website)?.map((item, index) => {
                            return (
                                <div
                                    key={item?.strapi_id}
                                    // onClick={() => setSelectedItem(item)}
                                    className='shadow rounded-xl cursor-pointer hover:shadow-red-200 hover:shadow-md'
                                >
                                    {UserBox({ item, language })}
                                </div>
                            )
                        })}
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