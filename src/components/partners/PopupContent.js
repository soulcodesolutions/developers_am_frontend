import React from 'react';

function PopupContent(props) {

    const {item = {}} = props

    return ( <div className=''>
        <div className="photo mx-auto rounded-full overflow-hidden  max-w-[200px]">
            <img src={process.env.GATSBY_STRAPI_API_URL + item.photo.url} alt="" className="w-full" />
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item.name}
        </div>
        {/* <div className="text-[16px] text-center  text-slate-500">
            {item.position}
        </div> */}
    </div> );
}

export default PopupContent;