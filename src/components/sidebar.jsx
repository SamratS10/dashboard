import { TbLetterB } from "react-icons/tb";
import { RxDashboard } from "react-icons/rx";
import { BsFillTagsFill } from "react-icons/bs";
import { AiFillSchedule } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { TfiHelpAlt } from "react-icons/tfi";
import { BiSolidContact } from "react-icons/bi";
import { useState } from "react";
const SideBar = ()=>{
    const [active,setActive] = useState("Dashboard")
    const topIcons = [{
        id:2,
        icon:<RxDashboard/>,
        text:"Dashboard"
    },{
        id:3,
        icon:<BsFillTagsFill/>,
        text:"Transactions"
    },{
        id:4,
        icon:<AiFillSchedule/>,
        text:"Schedules"
    },{
        id:5,
        icon:<FaCircleUser/>,
        text:"Users"
    },{
        id:6,
        icon:<IoSettingsSharp/>,
        text:"Settings"
    },]
    const bottomIcons = [{
        id:7,
        icon:<TfiHelpAlt/>,
        text:"Help"
    },{
        id:8,
        icon:<BiSolidContact/>,
        text:"Contact Us"
    },]
    return(
        <div className=" h-screen flex flex-col justify-between items-center m-5 rounded-xl md:items-left md:text-left p-3 bg-black text-white w-[25%] md:w-[23%] lg:w-[18%]">
            <div>
                <div className=" flex items-center gap-3">
                    <span className=" text-[40px]"><TbLetterB/></span>
                    <span className=" hidden md:block text-4xl">Board.</span>
                </div>
                <ul className=" flex flex-col gap-8 mt-5">
                    {
                        topIcons.map((each)=>(
                            <li key={each.id} className={` flex items-center gap-3 p-3 ${active===each.text ? "bg-white text-black":""}`} onClick={()=>setActive(each.text)}>
                                <span className=" text-[35px]">{each.icon}</span>
                                <span className={`hidden md:block text-lg  ${active===each.text ? "text-black":"text-white"}`}>{each.text}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <ul className=" flex flex-col gap-8 mt-5">
                    {
                        bottomIcons.map((each)=>(
                        <li key={each.id} className=" flex items-center gap-3">
                            <span className="text-[35px]">{each.icon}</span>
                            <span className="hidden md:block text-lg text-white">{each.text}</span>
                        </li>
                        ))
                    }
                </ul>
        </div>
    )


}

export default SideBar