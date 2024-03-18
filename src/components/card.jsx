import { FaTags } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";
import { AiOutlineLike } from "react-icons/ai";
import { LuUsers2 } from "react-icons/lu";
const Card = ()=>{
    const cardData = [{
        icon:<BiCalendarEvent/>,
        text:"Total Revenues",
        total:"$2,129,430",
        bgColor:"#DDEFE0"
    },
    {
        icon:<FaTags/>,
        text:"Total Transactions",
        total:"1,520",
        bgColor:"#F4ECDD"
    },
    {
        icon:<AiOutlineLike/>,
        text:"Total Likes",
        total:"9,721",
        bgColor:"#EFDADA"
    },
    {
        icon:<LuUsers2/>,
        text:"Total Users",
        total:"892",
        bgColor:"#DEE0EF"
    }
]
return(
    <ul className=" flex flex-col flex-wrap justify-center md:flex-row gap-4">
        {
            cardData.map((each)=>(
                <li key={each.total} className={`w-full md:w-[22%]  shadow-lg p-5 rounded-lg overflow-auto`} style={{backgroundColor:each.bgColor}}>
                    <div className=" w-full">
                        <p className="text-[24px] lg:ml-24">{each.icon}</p>
                    </div>
                    <h4 className=" text-black text-sm my-3 font-medium">{each.text}</h4>
                    <h2 className=" text-xl font-bold">{each.total}</h2>
                </li>
            ))
        }
    </ul>
)
}

export default Card