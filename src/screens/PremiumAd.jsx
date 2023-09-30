import React from "react";
import premiumad from "../assets/PremiumAd.svg";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";

export default function PremiumAd(){

    return(
        <div className="flex flex-col">
            <text className="underline text-xs pl-6 pt-10">Continue As Free</text>
            <div className="flex-center flex-col">
            <img src={premiumad} className="h-80 w-80"/>
            <h3 className="font-bold text-center" style={{fontSize:20}}>What Is The Features Of</h3>
            <h3 className="font-bold text-center" style={{fontSize:20}}><text  style={{color:'dodgerblue'}}>Premium</text> Account?</h3>
            <text className="font-bold text-center w-60 leading-6 pt-4 text-grey" >In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. </text>
            <LinearBtn text={"Subscribe Now!"}/>
            <Link to={"/premiumad"} className="shadow-md text-secondary rounded-full p-6 min-w-fit font-bold " style={{color:'dodgerblue'}}>Start 7 Days Trial</Link>
        
            </div>
            </div>
    )
}