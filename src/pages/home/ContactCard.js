import React, { useState } from 'react';
import Primary from '../../components/button/primary';

function ContactCard(props) {

    const { className = "" } = props

    const [value, setValue] = useState({
        name : "",
        email : "",
        phone : "",
        message : ""
    })

    const textFieldList = [
        {
            id : 1,
            name : "name",
            label : "Name",
        },
        {
            id : 2,
            name : "email",
            label : "Email",
        },
        {
            id : 3,
            name : "phone",
            label : "Phone",
        },
    ]

    const handlechange = (e) => {

        setValue(prev => ({
            ...prev,
            [e.name] : e.target.value
        }))
    }

    

    return ( <div className={className}>
        <div className="bg-white rounded-xl p-[20px] ">
            {
                textFieldList?.map(item => {
                    return(<TextField key={item.id} item={item} handlechange={handlechange} value={value} />)
                })
            }
            <div className="pt-[20px]">
                <Primary label="Submit" />
            </div>
            
        </div>
         
    </div> );
}

const TextField = ({item = {}, handlechange = () => {}}, value = {}) => {
    return(<div>
        <div className="text-slate-500">
            {item.label}
        </div>
        <input 
            name={item?.name}  
            value={value?.[item.name]} 
            onChange={handlechange} 
            className='border-2 my-[10px] p-[10px] w-full rounded-lg' 
        />
    </div>)
}

export default ContactCard;