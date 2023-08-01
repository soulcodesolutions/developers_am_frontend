import React, { useState } from 'react';
import Primary from '../button/Primary';
import axios from 'axios';

function ContactCard(props) {

    const { className = "" } = props

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
            [e.target.name]: e.target.value
        }))
    }

    const submitInquiry = (e) => {
        console.log("Submitting Inquiry")
        let data = {
            name: value.name,
            phone: value.phone,
            email: value.email,
            message: value.message
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${process.env.GATSBY_API_TOKEN}`
        }
        axios
            .post(
                `${process.env.GATSBY_API_URL}/api/inquiries`,
                {
                    data: data
                },
                {
                    headers: headers
                })
            .then((response) => {
                if (response.status == 200) {
                    console.log('Submitted')
                    //TODO: Will need to add UI feedback for this operation.
                }
            })
    }

    return (<div className={className}>
        <div className="bg-white rounded-xl p-[20px] ">
            {
                textFieldList?.map(item => {
                    return (<TextField key={item.id} item={item} handlechange={handlechange} value={value} type={item?.type} />)
                })
            }
            <TextArea item={{ name: "message", label: "Message" }} value={value} handlechange={handlechange} />
            <div className="pt-[20px]">
                <Primary label="Submit" className="cursor-pointer" onClick={submitInquiry} />
            </div>

        </div>

    </div>);
}

const TextField = ({ item = {}, handlechange = () => { } }, value = {}, type = "text") => {
    return (<div>
        <div className="text-slate-500">
            {item.label}
        </div>
        <input
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            type={type}
            className='border-2 my-[10px] p-[10px] w-full rounded-lg'
        />
    </div>)
}

const TextArea = ({ item = {}, handlechange = () => { } }, value = {}, type = "text") => {
    return (<div>
        <div className="text-slate-500">
            {item.label}
        </div>
        <textarea
            name={item?.name}
            value={value?.[item.name]}
            onChange={handlechange}
            // type={type}
            className='border-2 my-[10px] p-[10px] w-full rounded-lg'
        />
    </div>)
}



export default ContactCard;