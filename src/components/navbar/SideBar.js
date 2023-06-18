import React, { useState } from 'react'
import { Link, navigate } from 'gatsby'


export default function SideBar(props) {

    const { navlinks = [], closeSidebar = () => { }, open = false } = props

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
                                            {item.lable}
                                            {item.children && <svg className={`ml-[10px] ${expand ? "rotate-[-90deg]" : "rotate-[90deg]"} transition`} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>}
                                        </span>
                                        <div className='text-gray-500 text-[20px]'>
                                            {
                                                expand && item.children.map((_child, index) => <div key={index} className="pt-[10px]">
                                                    <span onClick={() => redirect(_child?.url)}>
                                                        {_child.lable}
                                                    </span>
                                                </div>)
                                            }
                                        </div>
                                    </div>
                                    :

                                    <span onClick={() => redirect(item?.link)} className="flex items-center">
                                        {item.lable}
                                        {item.children && <svg className={`ml-[10px] rotate-[-90deg] `} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" /></svg>}
                                    </span>
                                }
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
