import Card from "./card"
import ChartCard from "./chartCard"
import Header from "./header"
import SideBar from "./sidebar"
import GradientChart from "./gradientChart"
const Dashboard = ()=>{
    return(
        <div className=" flex">
            <SideBar/>
            <div className=" w-full mx-2">
                <Header/>
                <Card/>
                <div className=" flex flex-col flex-wrap items-center justify-center">
                    <GradientChart/>
                    <ChartCard/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard