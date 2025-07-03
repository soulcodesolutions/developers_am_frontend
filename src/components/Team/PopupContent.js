import React from 'react';
import { JustAppear } from '../SlideAnimation';
import MarkdownView from 'react-showdown';


function PopupContent({ item }) {

    return ( <div className=''>
        <div className="photo mx-auto rounded-full overflow-hidden  max-w-[200px]">
            <img src={process.env.GATSBY_STRAPI_API_URL + item?.photo?.url} alt="" className="w-full" />
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item?.name}
        </div>
        <div className="text-[16px] text-center  text-slate-500">
            <MarkdownView markdown={item?.position} />
        </div>
        <JustAppear className="text- pt-[20px] popup_container">
            <MarkdownView 
                markdown={item.description?.data?.description}
                options={{
                    openLinksInNewWindow : true,
                    simplifiedAutoLink : true
                }}
                />
        </JustAppear>
    </div> );
}

export default PopupContent;