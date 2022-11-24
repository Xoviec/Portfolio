
export const Navbar = ({active}) =>{


    return(
        <div className="flex relative items-center justify-center navbar">
            <div className="fixed flex items justify-around items-center h-12 w-96 bg-slate-200 rounded-full bottom-5 ">
                <div className={`${active == 'about' ? 'scale-110 bg-red-800 duration-500' : ''} ml-2 border-r-2`}>About</div>
                <div className={`${active == 'exp' ? 'scale-110 bg-red-800 duration-500' : ''} ml-2 border-r-2`}>Experience</div>
                <div className={`${active == 'projects' ? 'scale-110 bg-red-800 duration-500' : ''} ml-2 border-r-2`}>Projects</div>
                <div className={`${active == 'contact' ? 'scale-110 bg-red-800 duration-500' : ''} ml-2 border-r-2`}>Contact</div>
            </div>
        </div>

    )
}