import React, { useState } from 'react';
import MarkdownView from "react-showdown";

import { motion } from 'framer-motion';
import { changeWordTo } from '../translation_custom';


function Content({ location, data = {}, language }) {



    // const data = {
    //     title: "Usefull links",
    //     legal_acts: [
    //         {
    //             id: 1,
    //             link: "",
    //             label: " documents link"
    //         },
    //         {
    //             id: 2,
    //             link: "",
    //             label: " documents link"
    //         },

    //     ],
    //     association_documents: [
    //         {
    //             id: 1,
    //             link: "",
    //             label: " documents link"
    //         },
    //     ],
    //     certifications: [
    //         {
    //             id: 1,
    //             link: "",
    //             label: " documents link"
    //         },
    //     ],
    //     usefull_links: [
    //         {
    //             id: 1,
    //             link: "",
    //             label: " documents link"
    //         },
    //     ]
    // }

    const _headings = [
        {
            id: 1,
            key: "legal_acts",
            label: "Legal acts"
        },
        {
            id: 2,
            key: "association_documents",
            label: "Association documents"
        },
        {
            id: 3,
            key: "certifications",
            label: "Certificates"
        },
        {
            id: 3,
            key: "usefull_links",
            label: "Useful links"
        },


    ]

    const [activeKey, setActiveKey] = useState("usefull_links")

    const HeaderTab = () => {
        return (
            <div className="flex flex-wrap w-full overflow-scroll no-scrollbar hide-scrollbar scroll-smooth  justify-center sm:justify-start max-w-[750px]">
                {
                    _headings.map(item => {
                        return (
                            <div
                                key={item?.key}
                                className={`pr-[10px] px-[10px] cursor-pointer mb-[20px]  ${activeKey === item?.key ? 'text-red-800 font-bold' : ''}`}
                                onClick={() => setActiveKey(item?.key)}
                            >
                                {changeWordTo(item?.label, language)}
                                {activeKey === item?.key ?
                                    <motion.div className='h-1 w-full bg-red-800 mt-[5px]' layoutId="underline"></motion.div>
                                    : null}
                            </div>
                        )
                    })
                }
            </div>
        )
    }

    const TabContentWrapper = ({ children }) => {
        return (<div className='py-[0px] sm:py-[20px]  '>
            {children}
        </div>)
    }

    const IconLink = () => (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z" /></svg>)
    const IconPdf = () => (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M11.363 2c4.155 0 2.637 6 2.637 6s6-1.65 6 2.457v11.543h-16v-20h7.363zm.826-2h-10.189v24h20v-14.386c0-2.391-6.648-9.614-9.811-9.614zm4.811 13h-2.628v3.686h.907v-1.472h1.49v-.732h-1.49v-.698h1.721v-.784zm-4.9 0h-1.599v3.686h1.599c.537 0 .961-.181 1.262-.535.555-.658.587-2.034-.062-2.692-.298-.3-.712-.459-1.2-.459zm-.692.783h.496c.473 0 .802.173.915.644.064.267.077.679-.021.948-.128.351-.381.528-.754.528h-.637v-2.12zm-2.74-.783h-1.668v3.686h.907v-1.277h.761c.619 0 1.064-.277 1.224-.763.095-.291.095-.597 0-.885-.16-.484-.606-.761-1.224-.761zm-.761.732h.546c.235 0 .467.028.576.228.067.123.067.366 0 .489-.109.199-.341.227-.576.227h-.546v-.944z" /></svg>)
    const IconDownload = () => (<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path d="M12 21l-8-9h6v-12h4v12h6l-8 9zm9-1v2h-18v-2h-2v4h22v-4h-2z"/></svg>)

    const getFileURL = (link) => {
        return (`${process.env.GATSBY_STRAPI_API_URL}${link}`)
    }

    const PdfList = () => {


        return (
            <TabContentWrapper >
                {
                    data?.[activeKey]?.filter(item => !item?.hide_in_website)?.map(item => {
                        // console.log(item)
                        return (<div className='  w-full lg:max-w-[50%] '>
                            {item?.pdf?.url ?
                                <a href={getFileURL(item?.pdf?.url)} key={item?.id} target='_blank' >

                                    <div className='flex items-center mb-[10px] p-[10px] shadow border-2 border- rounded-lg w-full '>
                                        <div className='mr-[10px]' > <IconDownload /></div>
                                        <div className='mr-[10px]'>{item?.label}</div>
                                    </div>
                                </a>
                                :
                                <a href={item.link} key={item?.id} target='_blank'  >
                                    <div className='flex items-center  mb-[10px] p-[10px] shadow border-2 border- rounded-xl w-full '>

                                        <div className='mr-[10px]' > <IconLink /></div>
                                        <div className='mr-[10px]'>{item?.label}</div>
                                    </div>
                                </a>
                            }
                        </div>
                        )
                    })
                }
            </TabContentWrapper>
        )
    }
    const LinkList = () => {

        return (
            <TabContentWrapper >
                {
                    data?.[activeKey]?.filter(item => !item?.hide_in_website)?.map(item => {
                        return (
                            <a href={item.link} key={item?.id} target='_blank'>
                                <div className='flex items-center  mb-[10px] p-[10px] shadow border-2 border- rounded-xl w-full sm:max-w-[50%]'>

                                    <div className='mr-[10px]'>{item?.label}</div>
                                    <div className='mr-[10px]' > <IconLink /></div>
                                </div>
                            </a>
                        )
                    })
                }
            </TabContentWrapper>
        )
    }

    return (<div>
        <div>
            <div className="pt-[150px] py-[50px]">
                <div className="container mx-auto">
                    <div className="text-[20px] sm:text-[40px] text-center sm:text-left font-bold text-red-800">
                        {/* <   MarkdownView markdown={data?.title} /> */}
                    </div>
                    <div className="pt-[20px]">
                        <HeaderTab />
                        {
                            activeKey === "legal_acts" && <PdfList />
                        }
                        {
                            activeKey === "association_documents" && <PdfList />
                        }
                        {
                            activeKey === "certifications" && <PdfList />
                        }
                        {
                            activeKey === "usefull_links" && <PdfList />
                        }

                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default Content;