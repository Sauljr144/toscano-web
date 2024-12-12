import Link from "next/link"

interface StoresProps{
    name: string;
    url:string;
}

const StoresBtn = ({name, url}: StoresProps) =>{
    return(
        <Link href={url} target="_blank">
                <button className=" lg:m-3 m-2 px-6 py-2 border-2 border-black hover:bg-black hover:text-white  rounded-3xl lg:text-lg text-xs font-medium font-poppins">
                    {name} 
                </button>
            </Link>
    )
}

export default StoresBtn