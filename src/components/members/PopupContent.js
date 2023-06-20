import React from 'react';

function PopupContent(props) {

    const {item = {}} = props

    return ( <div className=''>
        <div className="photo mx-auto rounded-xl overflow-hidden  max-w-[200px]">
            <div className="bg-sky-100 min-h-[200px]">
                <img src={process.env.STRAPI_API_URL + item.photo.url} alt="" />
            </div>
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item.name}
        </div>
        <div className="text-[16px] text-center  text-slate-500">
            {item.position}
        </div>
    </div> );
}

export default PopupContent;