import React, { useState } from 'react';
import Primary from '../button/Primary';
import MarkdownView from "react-showdown";
import { changeWordTo } from '../translation_custom';
// import { languages } from './Home';

import axios from 'axios';




function ContactCard(props) {

    const { className = "", data = {}, language } = props

    const _defaultValue = {
        name: "",
        email: "",
        phone: "",
        message: ""
    }

    const [value, setValue] = useState(_defaultValue)

    const [loading, setLoading] = useState(false)
    const [success, setSucess] = useState(false)

    const _isDisabled = value.email === "" || value.message === "" || value.name === ""


    const textFieldList = [
        {
            id: 1,
            name: "name",
            label: "Name",
            type: "text",
            required : true,
            // placeholder : "Name"
        },
        {
            id: 2,
            name: "email",
            label: "Email",
            type: "text",
            required : true,


        },
        {
            id: 3,
            name: "phone",
            label: "Phone",
            type: "text",

        },

    ]

    const handlechange = (e) => {

        // console.log(e)
        setValue(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    async function sendMessage() {
        if(_isDisabled || loading){
            return
        }
        setLoading(true)
        try {
            const response = await axios.post(`${process.env.GATSBY_STRAPI_API_URL}/api/contact/mail`, value);
        //   const response = await axios.post(`http://localhost:1337/api/contact/mail`, value);
            setValue(_defaultValue)
            setSucess(true)
          console.log(response);
        } catch (error) {
          console.error(error);
        }
        setLoading(false)

      }
      


    return (<div id="contact" className={className}>
        <div className="backdrop-blur-sm bg-white/30 _bg-white rounded-lg p-[10px] px-[20px] ">
            <div className="">
                <div className="text-[20px] sm:text-[20px] text-center sm:text-center font-bold text-white _text-red-800 pb-[10px]">
                    <MarkdownView markdown={data?.title || `${changeWordTo("Contact us", language)}`} />
                </div>
            </div>
            {
                textFieldList?.map(item => {
                    return (<TextField key={item.id} item={item} handlechange={handlechange} value={value} type={item?.type} language={language} />)
                })
            }
            <TextArea item={{ name: "message", label: "Message" }} value={value} handlechange={handlechange} language={language} />
            <div className="pt-[10px]">
                {success ? <>
                    <div className="text-center py-[10px] text-green-500"> {changeWordTo("Thank you!", language)}</div>
                    </> :
                    <Primary 
                    onClick={() => sendMessage()}
                    disabled={_isDisabled}
                    label={ loading ? "..." : changeWordTo("Send", language)} className={`cursor-pointer max-w-[100px] mx-auto ${loading ? "animate-pulse" : ""} `} />
                }
            </div>

        </div>

    </div>);
}

const TextField = ({ item = {}, handlechange = () => { },  value = {}, type = "text", language }) => {
    return (<div>
        {/* <div className="_text-slate-500">
            {item.label}
        {changeWordTo(item.label, language)}
        </div> */}
        <input
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            placeholder={changeWordTo(item.label, language)}
            required={item?.required}
            type={type}
            className='border-2 my-[8px] p-[10px] w-full rounded-lg text-[14px]'
        />
    </div>)
}

const TextArea = ({ item = {}, handlechange = () => { } ,  value = {}, type = "text", language}) => {
    return (<div>
        {/* <div className="text-slate-500">
            {item.label}
        </div> */}
        <textarea
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            placeholder={changeWordTo(item.label, language)}
            required={true}

            // type={type}
            className='border-2 my-[10px] p-[10px] w-full rounded-lg text-[14px]'
        />
    </div>)
}



export default ContactCard;