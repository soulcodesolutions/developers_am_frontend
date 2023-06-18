import React from "react";

export default function Primary(props) {
    const {className = "",
    //  onClick = (e) => {}, 
     label = "Button" } = props

    return (<div 
        // onClick={onClick}
        className={`rounded-xl p-[10px] bg-red-700 ${className} text-white text-center font-bold`}>
        {label}
    </div>  );
}