
export type ExpCardProps = {
    svg: any;
    name: string;

}

export const ExpCard = (props: ExpCardProps) =>{




    return(
        <div className="flex flex-col  items-center rounded-xl bg-[#a4b8d5] hover:scale-125 duration-200 group lg:hover:scale-100 md:hover:scale-75 md:scale-75">
            <div className="m-5 md:m-1">
                {props.svg}
            </div>
            <div className="mt-0 m-5 font-bold text-xl text-center text-[#626e80] md:hidden">
                {props.name}
            </div>
        </div>
    )
}