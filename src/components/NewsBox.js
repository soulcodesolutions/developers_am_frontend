import React from "react";
import { Link } from "gatsby";
import 'swiper/css/bundle';
import { changeWordTo } from "./translation_custom";

function NewsBox({ item, language }) {
    return (
        <div key={item?.strapi_id} className="px-[20px] sm:px-0 h-full ">
            <Link to={`/${language}/news/${item?.uniqueid}`}>
                <div className={`border-0 shadow-lg hover:shadow-red-200 cursor-pointer border-red-800 p-[20px] rounded-sm sm:h-full max-h-[600px]`}  >
                   <div className="flex flex-col justify-between items- h-full">

                    <div className="grow ">

                        <div className="img w-full h-[150px] bg-sky-100 overflow-hidden rounded-sm">
                            <img src={`${process.env.GATSBY_STRAPI_API_URL}${item?.thumbnail?.url}`} className="" alt="" />
                        </div>
                        <div className="text-[14px] 2xl:text-[16px] pt-[10px] ">
                          
                            {item?.title}
                        </div>
                        <div className="text-[12px] 2xl:text-[14px] py-[0px] text-slate-500">
                            {item?.description}
                        </div>
                    </div>
                    <div>

                        <div className="py-[10px] flex items-end">
                            <div className="text-red-800 mr-[10px] font-bold"> {changeWordTo("Read", language)} </div>
                            <svg className="w-[20px]" fill="#991b1b" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero" /></svg>
                        </div>
                    </div>
                   </div>

                </div>
            </Link>
        </div>);
}

export default NewsBox;