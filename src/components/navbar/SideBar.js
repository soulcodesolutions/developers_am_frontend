import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'

import { languages } from "../home/Home";
import { changeWordTo } from '../translation_custom';
import { SwithLangDisplay } from './FloatingBar';



export default function SideBar(props) {

    const { navlinks = [], closeSidebar = () => { }, open = false,  location, language  } = props

    const [expand, setExpand] = useState(false)

    // const navigate = useNavigate()

    const redirect = (url) => {
        closeSidebar()
        navigate(url)
    }

    const  _navlinks = [
         {
        id:1,
        lable : "Home",
        link : "/",
    },
    ...navlinks
    ]

    const isActiveLanguage = (language) => {
    
        if(location.pathname.split('/')[1] === language){
            return true
        }
        return false
    }

    const getLinkURL = (l) => {
        if(typeof window !== 'undefined'){
            return `${location.pathname.replace(`/${language}`, `/${l}`)}${window.location.hash.substring(1) ? `#${window.location.hash.substring(1)}` : '#i'}`
        }
        return ""
    }

    return (
        <>
            {open && <div onClick={() => closeSidebar()} className="fixed z-[110] h-full w-full right-0 top-0 bg-black/50 "></div>}
            <div className={`${open ? "translate-x-0" : "translate-x-[110%]"} duration-1000  transition-transform fixed z-[111] h-full w-full right-0 top-0  h-full w-[75%] min-w-[300px] max-w-[400px] px-[50px] bg-white `}>
                <div className=' mr-0 pt-[40px]' >
                    <div
                        onClick={() => closeSidebar()}
                        className="cursor-pointer relative w-[30px] h-[30px] p-2 flex flex-col justify-between ml-auto  ">
                        <div className={`absolute h-[5px] w-[30px] bg-[#1D337A] rotate-[135deg]`}></div>
                        <div className={`absolute h-[5px] w-[30px] bg-[#1D337A] rotate-[45deg]`}></div>
                    </div>
                </div>
                <div className="flex flex-col items-start ">
                    {_navlinks?.map((item) => {
                        return (
                            <div key={item?.lable} className={`pb-[40px] inter text-[24px] font-[500]  cursor-pointer  text-black`}>

                                {item.children ?
                                    <div>
                                        <span className="flex items-center" onClick={() => setExpand(!expand)}>
                                            {/* {item.lable} */}
                                            {changeWordTo(item.lable, language)} 
                                            {item.children && <svg className={`ml-[10px] ${expand ? "rotate-[-90deg]" : "rotate-[90deg]"} transition`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>}
                                        </span>
                                        <div className='text-gray-500 text-[20px]'>
                                            {
                                                expand && item.children.map((_child, index) => <div key={index} className="pt-[10px]">
                                                    <span onClick={() => redirect(_child?.url)}>
                                                        {changeWordTo(_child.lable, language)}
                                                    </span>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    :

                                    <span onClick={() => redirect(item?.link)} className="flex items-center">
                                         {changeWordTo(item.lable, language)} 
                                        {item.children && <svg className={`ml-[10px] rotate-[-90deg] `} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>}
                                    </span>
                                }
                            </div>
                        )
                    })}
                    <div className="flex uppercase">

                      {languages.map(l => {
                          return (
                            <Link
                                key={l}
                                className={` min-w-[80px] text-center ${isActiveLanguage(l)? "text-red-800  font-bold bg-red-100" : ""}`}
                                // to={location.pathname.replace(`/${language}`, `/${l}`)}
                                to={getLinkURL(l)}

                                // activeClassName="text-red-800  font-bold bg-red-100"
                                aria-disabled={l === language}
                            >
                                {SwithLangDisplay(l)}
                            </Link>
                        )
                    })}
                    </div>
                </div>
            </div>
        </>
    )
}
