import { FaGoogle } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
const SignIn = ()=>{
    return(
        <div className="h-screen flex flex-col md:flex-row bg-[#F5F5F5]">
            <div className="h-[33%] bg-black w-full flex justify-center items-center md:h-full">
                <h1 className=" text-6xl text-white">Board.</h1>
            </div>
            <div className=" flex flex-col justify-center items-center w-full h-full">
                <h2 className=" text-4xl text-black font-semibold m-2">Sign In</h2>
                <p className=" text -2xl text-black m-2">Sign in to your account</p>
                <div>
                    <button className="text-[14px] text-[#858585] font-[Montserrat] flex items-center gap-2 bg-white rounded-md shadow-lg p-3"><FaGoogle size={22} color="blue"/> Sign in with Google</button>
                </div>
                <div className=" shadow-2xl rounded-lg w-[80%] p-10 m-5">
                    <div>
                    <label htmlFor="email" className=" font-[lato] text-xl">
                        Email Address 
                    </label><br/>
                    <Input type="email" placeholder="Enter your email address" className=" w-[80%] bg-[#EAEAEA] h-[40px]"/>
                    </div>
                    <div className="mt-6">
                    <label htmlFor="password" className=" font-[lato] text-xl">
                        Password 
                    </label><br/>
                    <Input type="password" placeholder="Enter your password" className=" w-[80%] bg-[#EAEAEA] h-[40px]"/>
                    </div>
                    <p className=" text-lg text-[#346BD4] my-3">Forgot Password?</p>
                    <Button varient="destractive" className="w-[80%] font-semibold text-md">Sign In</Button><br/>
                </div>
                <p className=" text-lg text-[#999999]">Don`t have an account? <span className="text-[#346BD4]">Register Here</span></p>
            </div>
        </div>
    )
}

export default SignIn