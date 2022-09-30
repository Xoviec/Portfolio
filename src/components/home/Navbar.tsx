
export const Navbar = () =>{


    return(
        <div className="flex items-center justify-center z-20 ">
            <div className="fixed flex items justify-around items-center h-12 w-96 bg-slate-200 rounded-full bottom-5 ">
                <div className="pr-6 border-r-2 border-indigo-500">About</div>
                <div className="pr-6 border-r-2 border-indigo-500">Experience</div>
                <div className="pr-6 border-r-2 border-indigo-500">Projects</div>
                <div>Contact</div>
            </div>
        </div>

    )
}