
export type ExpCardProps = {
    svg: string;
    name: string;

}

export const ExpCard = (props: ExpCardProps) =>{




    return(
        <div className="flex flex-col  items-center rounded-xl bg-[#a4b8d5]">
            <div className="m-5">
                {props.svg}
            </div>
            <div className="mt-0 m-5 font-bold text-xl text-[#626e80]">
                {props.name}
            </div>
        </div>
    )
}