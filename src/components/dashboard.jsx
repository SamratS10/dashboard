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
                <div className=" flex flex-col items-center justify-center md:flex-row">
                    <GradientChart/>
                    <ChartCard/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard