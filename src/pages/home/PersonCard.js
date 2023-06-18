import React from "react";
// import UserIcon from '../images/OIP.jpg'

export default function PersonCard(props) {
    const { item = {} } = props
    console.log('Council -> ', props)
    return (<div className="max-w-[250px] bg-white rounded-xl p-[20px]" >
        <div className="photo mx-auto rounded-full overflow-hidden">
            <img src={process.env.STRAPI_API_URL + item.photo.url} alt="" className="w-full" />
        </div>
        <div className="text-[20px] text-center pt-[20px]">
            {item.name}
        </div>
        {props.isCouncil ? (
            <div className="text-[16px] text-center  text-slate-500">
                {item.position}
            </div>
        ) : (
            ""
        )}
    </div>)
}