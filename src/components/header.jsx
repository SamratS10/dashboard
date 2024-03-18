import { Input } from "./ui/input"
import { CiSearch } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import { FaBell } from "react-icons/fa6";
const Header = ()=>{
    return(
        <div className=" flex justify-between items-center w-[100%]">
            <h1 className=" text-lg md:text-3xl font-bold text-black hidden md:block">Dashboard</h1>
            <div className=" flex items-center gap-3 ">
                <div className=" flex items-center p-3">
                    <Input text="search" placeholder="search" className="border-none w-[70%]" />
                     <CiSearch/>
                </div>
                <FaBell size={20}/>
                <FaUserCircle size={20}/>
            </div>
        </div>
    )
}

export default Header