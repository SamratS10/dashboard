import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';
import { FaGoogle } from "react-icons/fa6";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef, useState } from "react";
import Cookies from 'js-cookie'

const SignIn = ()=>{
    const [error,setError] = useState(false)
    const navigate = useNavigate()
    let userEmail = useRef("")
    let userPassword = useRef("")
    const handleSubmit = async(e)=>{
        e.preventDefault()
        toast.success('Logged In Successfully!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: "Flip",
            });
        navigate("/dashboard",{replace:true})
        //const name = userName.current?.value 
        //const password = userPassword.current?.value
        //if(!name || !password){
            //setError(true)
            //return
        //}
        //setError(false)
        //const userDetails = {name, password}
        //const url = 'https://apis.ccbp.in/login'
        //const options = {
            //method: 'POST',
            //body: JSON.stringify(userDetails),
        //}
        //const response = await fetch(url, options)
        //const data = await response.json()
        //if(response.ok===true){
            //Cookies.set("token",data.jwt_token,{expires:30})
            //userName.current.value=""
            //userPassword.current.value=""
            //toast.success('Logged In Successfully!', {
                //position: "top-right",
                //autoClose: 5000,
                //hideProgressBar: false,
                //closeOnClick: true,
                //pauseOnHover: true,
                //draggable: true,
                //progress: undefined,
                //theme: "light",
                //transition: "Flip",
                //});
            //navigate("/dashboard",{replace:true})
        //}else{
            //toast.error('Invalid Credientials!', {
                //position: "top-center",
                //autoClose: 5000,
                //hideProgressBar: false,
                //closeOnClick: true,
                //pauseOnHover: true,
                //draggable: true,
                //progress: undefined,
                //theme: "light",
                //transition: "Flip",
                //});
        //}
    }

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
                <form className=" shadow-2xl rounded-lg w-[80%] p-10 m-5" onSubmit={handleSubmit}>
                    <div>
                    <label htmlFor="email" className=" font-[lato] text-xl">
                        User Name 
                    </label><br/>
                    <Input type="text" placeholder="Enter your email address" className=" w-[80%] bg-[#EAEAEA] h-[40px]" ref={userEmail}/>
                    </div>
                    <div className="mt-6">
                    <label htmlFor="password" className=" font-[lato] text-xl">
                        Password 
                    </label><br/>
                    <Input type="password" placeholder="Enter your password" className=" w-[80%] bg-[#EAEAEA] h-[40px]" ref={userPassword}/>
                    </div>
                    {error ? <p className=" text-lg text-red-600">All fields are required*</p> : ""}
                    <p className=" text-lg text-[#346BD4] my-3">Forgot Password?</p>
                    <Button varient="destractive" className="w-[80%] font-semibold text-md" type="submit">Sign In</Button><br/>
                </form>
                <p className=" text-lg text-[#999999]">Don`t have an account? <span className="text-[#346BD4]">Register Here</span></p>
            </div>
        </div>
    )
}

export default SignIn