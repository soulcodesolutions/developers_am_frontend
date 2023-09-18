import React from 'react';
import MarkdownView from 'react-showdown';

function PopupContent(props) {

    const {item = {}} = props

    return ( <div className=''>
        <div className="photo mx-auto rounded-xl overflow-hidden  max-w-[200px]">
            <div className=" min-h-[150px] max-h-[200px]">
                <img src={process.env.GATSBY_STRAPI_API_URL + item?.photo?.url} alt="" />
            </div>
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item?.name}
        </div>
        <div className="text-[16px] text-center  text-slate-500">
            {item?.position}
        </div>
        <div className="text-[16px] text-  pt-[20px] popup_container">
            <MarkdownView 
                markdown={item?.description?.data?.description}
                options={{
                    openLinksInNewWindow : true,
                    simplifiedAutoLink : true
                }}
                />
            
        </div>
    </div> );
}

export default PopupContent;