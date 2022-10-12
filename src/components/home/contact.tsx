import { useState } from "react"
import { AssetProgressBar } from "./AssetProgressBar"

export const Contact = ({progress, setProgress}) =>{

    const [mailCheck, setMailCheck] = useState(false)
    const [topicCheck, setTopicCheck] = useState(false)
    const [contentCheck, setContentCheck] = useState(false)



    const handleMailChange = (event) =>{
        if ((event.target.value.length > 0)&&(mailCheck==false)){
            setProgress(progress+33)
            setMailCheck(true)
        }
        if ((event.target.value.length==0)){
            setProgress(progress-33)
            setMailCheck(false)
        }   
        }

        const handleTopicChange = (event) =>{
            if ((event.target.value.length > 0)&&(topicCheck==false)){
                setProgress(progress+33)
                setTopicCheck(true)
            }
            if ((event.target.value.length==0)){
                setProgress(progress-33)
                setTopicCheck(false)
            }   
            }
        
        const handleContentChange = (event) =>{
            if ((event.target.value.length > 0)&&(contentCheck==false)){
                setProgress(progress+34)
                setContentCheck(true)
            }
            if ((event.target.value.length==0)){
                setProgress(progress-34)
                setContentCheck(false)
            }   
            }
    

    return(
        <div className="flex flex-col items-center">
            <h1 className=" text-[3.1rem] font-bold text-[#a4b8d5]  w-96/ -rotate-90` break-normal">Contact me!</h1>
            <div className="bg-[#2a476e9e] h-[500px]d max-w-[1200px] flex items-center justify-center rounded-lg  p-5 mt-10">

                <div className="flex flex-col items-center w-96 text-[1.2rem] font-bold text-[#a4b8d5] ">
                    <ul>
                    <li>
                        adriangasiorek@interia.pl
                    </li>
                    <li>
                        733-192-848
                    </li>
                    <li>

                    </li>
                    </ul>

                </div>
                
                <form className="flex flex-col gap-5 w-[1000px] p-4" action="">
                    <input className="rounded-xl p-4 bg-[#5b7fb3] text-[#a4b8d5] placeholder-[#a4b8d5] focus:placeholder-opacity-50 text-xl font-bold  outline-0   " type="text" placeholder="your e-mail" required="required" name={'email'}  onChange={handleMailChange} />
                    <input className="rounded-xl p-4 bg-[#5b7fb3] text-[#a4b8d5] placeholder-[#a4b8d5] focus:placeholder-opacity-50 text-xl font-bold  outline-0 " type="text" placeholder="topic" required="required" onChange={handleTopicChange}/>
                    <textarea className="resize-none rounded-xl p-4 bg-[#5b7fb3] text-[#a4b8d5] placeholder-[#a4b8d5] focus:placeholder-opacity-50 text-xl font-bold  outline-0 h-44" type="text" placeholder="content" required="required" onChange={handleContentChange}/>
                    <button className="bg-[#007aff] rounded-xl  text-[1.2rem] font-bold text-[#d4e1f4]"  type={progress == 100 ? 'submit' : 'button'} >
                        <div>
                            <AssetProgressBar setProgress={setProgress} progress={progress}>Submit</AssetProgressBar>
                        </div>
                    </button>

                </form>
            </div>
        </div>
    )
}