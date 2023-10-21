import React from "react";

export default function Primary(props) {
    const {className = "",
     onClick = (e) => {}, 
     label = "Button",
    disabled = false,
    } = props

    return (<div 
        onClick={onClick}
        className={`rounded-xl p-[10px]  ${className} text-white text-center font-bold ${disabled ? "bg-slate-300" : "bg-red-700"}`}>
        {label}
    </div>  );
}