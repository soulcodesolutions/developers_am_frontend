import React, { useState } from 'react';
import Primary from '../button/Primary';
import MarkdownView from "react-showdown";


function ContactCard(props) {

    const { className = "", data = {} } = props

    const [value, setValue] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    })

    const textFieldList = [
        {
            id: 1,
            name: "name",
            label: "Name",
            type: "text",
            // placeholder : "Name"
        },
        {
            id: 2,
            name: "email",
            label: "Email",
            type: "text",

        },
        {
            id: 3,
            name: "phone",
            label: "Phone",
            type: "text",

        },

    ]

    const handlechange = (e) => {

        setValue(prev => ({
            ...prev,
            [e.name]: e.target.value
        }))
    }



    return (<div id="contact" className={className}>
        <div className="backdrop-blur-sm bg-white/30 _bg-white rounded-lg p-[10px] px-[20px] ">
            <div className="">
                <div className="text-[20px] sm:text-[20px] text-center sm:text-center font-bold text-white _text-red-800 pb-[10px]">
                    <MarkdownView markdown={data?.title || "Contact us"} />
                </div>
            </div>
            {
                textFieldList?.map(item => {
                    return (<TextField key={item.id} item={item} handlechange={handlechange} value={value} type={item?.type} />)
                })
            }
            <TextArea item={{ name: "message", label: "Message" }} value={value} handlechange={handlechange} />
            <div className="pt-[10px]">
                <Primary label="Submit" className="cursor-pointer max-w-[100px] mx-auto" />
            </div>

        </div>

    </div>);
}

const TextField = ({ item = {}, handlechange = () => { } }, value = {}, type = "text") => {
    return (<div>
        {/* <div className="text-slate-500">
            {item.label}
        </div> */}
        <input
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            placeholder={item.label}
            type={type}
            className='border-2 my-[8px] p-[10px] w-full rounded-lg text-[14px]'
        />
    </div>)
}

const TextArea = ({ item = {}, handlechange = () => { } }, value = {}, type = "text") => {
    return (<div>
        {/* <div className="text-slate-500">
            {item.label}
        </div> */}
        <textarea
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            placeholder={item.label}

            // type={type}
            className='border-2 my-[10px] p-[10px] w-full rounded-lg text-[14px]'
        />
    </div>)
}



export default ContactCard;