import { PieChart } from "./pieChart"

const ChartCard = ()=>{
    const chartData = [{
        listColor:"#98D89E",
        text:"Basic Tees",
        percentage:"55%",
    },{
        listColor:"#F6DC7D",
        text:"Custom Short Pants",
        percentage:"31%",
    },
    {
        listColor:"#EE8484",
        text:"Super Hoodies",
        percentage:"14%",
    }
]
return(
    <div className=" w-full md:w-[500px] p-5 shadow-lg md:shadow-xl m-2">
        <div className=" flex justify-between items-center flex-1">
            <h1 className=" text-black text-lg font-semibold">Top Products</h1>
            <p className=" text-[#858585] text-md">May - June 2021</p>
        </div>
        <div className=" flex flex-col md:flex-row items-center justify-center  gap-5 flex-1">
            <div className=" h-[50%] w-[55%]">
                <PieChart/>
            </div>
            <ul>
                {
                    chartData.map((each)=>(
                        <li key={each.listColor} className={`list-disc marker:text-[${each.listColor}]`}>
                            <span className=" text-[#000000] font-semibold text-[14px]">{each.text}</span><br/>
                            <span className=" text-[#858585] text-[12px]">{each.percentage}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
    </div>

)
}

export default ChartCard