import React from "react";
import HeadBar from "../components/HeadBar";
import reward from "../assets/Reward.svg";
import rewardtime from "../assets/RewardTime.svg";
import rewardplay from "../assets/RewardPlay.svg";
import PlanItem from "../components/PlanItem";
import plan3 from "../assets/Plan3.svg";
import plan4 from "../assets/Plan4.svg";

export default function RewardActions(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Rewarded Actions"} loc={"/settings"}/>
            <img src={reward} className="h-60 w-full "/>
            <img src={rewardtime}/>
            <h3 className="font-bold text-center pt-4" style={{fontSize:20}}>Earn <text style={{color:'dodgerblue'}}>Free</text> Time</h3>
            <img src={rewardplay} className="h-30"/>
            <text className="font-bold text-center " style={{fontSize:20}}>Subscribe<text style={{color:'dodgerblue'}}> Premium</text></text>
            <div className="flex flex-row">
            <PlanItem image={plan3} text={"Pro"} amount={49.9} clr={"#FF9820"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'lightgrey'}}/>
            </div>
            <div className="flex flex-row">
            <PlanItem image={plan4} text={"Advance"} amount={49.9} clr={"#FF9820"}/>
            <div className="h-4 w-4 rounded-full mt-10" style={{backgroundColor:'#FF9820'}}/>
            </div>
        </div>
    )
}