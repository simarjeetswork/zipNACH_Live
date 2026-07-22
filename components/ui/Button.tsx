import Image from "next/image"

interface ButtonProps {
    label?:string;
    endIcon?:string;
}

function Button ({label, endIcon}: ButtonProps){
    return (
        <button className="relative px-[24px] py-[8px] rounded-[4px] bg-[var(--color-primary)] inline-flex gap-2 cursor-pointer hover:bg-[#08376B] duration-300 ease-in-out">
            { label &&  <span className="text-white ">{label}</span>}
            { endIcon && <Image src={endIcon} alt={label} height={14} width={18} />}
        </button>
    )
}
export default Button