import { button, Button } from "@nextui-org/react";
import React from "react";

export default function TabButton ({active, selectTab, children}){
    const buttonClasses = active ? 'text-white border-b border-cyan-400' : 'text-[#ADB7BE]'
    return(
        <Button onClick={selectTab} variant="light" color="bg-transparent" >
            <p className={`m-3 font-semibold hover:text-white ${buttonClasses} `} >
            {children}
            </p>
        </Button>
    )
}