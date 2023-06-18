import React from "react";

export default function Secondary(props) {
    const {className = "",
    //  onClick = (e) => {}, 
     label = "Button" } = props

    return (<div 
        // onClick={onClick}
        className={`rounded-xl p-[10px] border-2 border-red-800 ${className} text-red-800  text-center font-bold`}>
        {label}
    </div>  );
}