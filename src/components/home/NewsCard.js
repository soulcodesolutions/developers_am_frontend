import React from "react";

function NewsCard(props) {

    const {item = {}, className = ""} = props

    return (<div className={`border-0 shadow-lg border-red-800 ${className} p-[20px] rounded-sm`}  >
        <div className="img w-full h-[150px] bg-sky-100"></div>
        <div className="text-[20px] pt-[10px]">
            {item?.title}
        </div>
        <div className="text-[16px] py-[0px] text-slate-500">
            {item?.description}
        </div>
        <div className="py-[10px] flex items-end">
            <div className="text-red-800 mr-[10px] font-bold">Read</div>
            <svg className="w-[20px]" fill="#991b1b" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m13.022 14.999v3.251c0 .412.335.75.752.75.188 0 .375-.071.518-.206 1.775-1.685 4.945-4.692 6.396-6.069.2-.189.312-.452.312-.725 0-.274-.112-.536-.312-.725-1.451-1.377-4.621-4.385-6.396-6.068-.143-.136-.33-.207-.518-.207-.417 0-.752.337-.752.75v3.251h-9.02c-.531 0-1.002.47-1.002 1v3.998c0 .53.471 1 1.002 1z" fill-rule="nonzero"/></svg>
        </div>
    </div>  );
}

export default NewsCard;