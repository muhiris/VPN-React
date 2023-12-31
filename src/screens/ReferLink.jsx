import React from "react";
import HeadBar from "../components/HeadBar";
import group2 from "../assets/Group2.svg";
import LinearBtn from "../components/LinearBtn";
import { Link } from "react-router-dom";
export default function ReferLink(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Referral"} loc={"/usersetting"}/>
            <div>
                <h3 className="font-bold mt-16">What Is Refferal?</h3>
                </div>
                <div>
                <p className="text-xs p-6" style={{color:'grey'}}>In publishing and <text style={{color:'dodgerblue'}}>graphic design,</text> Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface</p>
            </div>
            <img src={group2} />
            <LinearBtn text={"Copy Refferal Link"} loc={"/referlink2"}/>
            <Link to={"/referlink"} className=" rounded-full p-6" style={{color:'dodgerblue'}}>Share It</Link>
        </div>
    )
}