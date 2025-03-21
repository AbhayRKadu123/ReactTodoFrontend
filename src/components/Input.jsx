import { useState } from "react"

export default function Input({placeholder,type,Val,SetVal}){
   return <>
    <input placeholder={placeholder} onChange={(event)=>{
        console.log(event.target.value)
        SetVal(event.target.value)
    }} value={Val} type={type} />
    </>
}