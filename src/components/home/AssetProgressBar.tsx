import { useState } from "react"



export const AssetProgressBar = ({progress}) => {


    return(
    <div>
        <div className={`flex items-center justify-center w-[100%]  h-12 rounded-xl bg-[#5b7fb3]  overflow-hidden`}>
            <div className={`absolute text-[#a4b8d5] ${progress == 100 ? 'text-white': null}`}>
                Submit
            </div> 
            <div style={{width:progress+'%', transition: 20}} className={`flex items-center justify-center h-[100%]  bg-[#007aff] duration-700 text-[1.2rem] font-bold text-[#d4e1f4]`}>
            {/* {
                 progress == 100 ? 'Submit' : null
            } */}
            </div>
        </div>
    </div>
    )
}