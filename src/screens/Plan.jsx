import React, { useState } from "react";
import HeadBar from "../components/HeadBar";
import plan1 from "../assets/Plan1.svg";
import PlanItem from "../components/PlanItem";
import plan2 from "../assets/Plan2.svg";
import plan3 from "../assets/Plan3.svg";
import plan4 from "../assets/Plan4.svg";
import plan5 from "../assets/Plan5.svg";
import LinearBtn from "../components/LinearBtn";

export default function Plan(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Plan"} loc={"/usersetting"} />
            <img src={plan1} className="h-60 w-80"/>
            <div className="flex flex-row rounded-full p-4">
             <text className="mr-20 ml-4 rounded-full " style={{backgroundColor:'white', color:'dodgerblue'}}>Monthly</text>
             <text style={{color:'grey'}}>yearly</text>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan2} text={"Free Plan"} amount={49.9} clr={"dodgerblue"}/>
            <img src={plan5}/>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan3} text={"Pro"} amount={49.9} clr={"dodgerblue"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan4} text={"Advance"} amount={49.9} clr={"dodgerblue"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>
            </div>
            <LinearBtn text={"Choose Plan"} loc={"/agreeplan"}/>
        </div>
    )
}