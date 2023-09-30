import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoHome, IoKeyOutline, IoCloseCircleSharp } from "react-icons/io5";
import failkey from "../assets/Failkey.svg";

export default function Fail(){

    return(
        <div className="flex-center flex-col">
            <div style={{padding:40, display:'flex', flexDirection:'row'}}>
                <Link to="/changepswd">
                <BsArrowLeftCircle className="text-3xl" style={{marginRight:40}}/>
                </Link>
            <text style={{fontWeight:'bold', width:200, paddingLeft:20}}>Fail</text>
            </div>
           <div className="flex-center flex-col">
            <img src={failkey} style={{color:'red', height:150, width:150}}/>
           <div className="flex-center flex-col mt-16">
            <text style={{fontSize:20}}>Your New Password</text>
            <text style={{fontSize:20}}>Has Not Been Set!</text>
            <text style={{ marginTop:20, color:'grey'}}>You May Have Entered Password With Are Not</text>
            <text style={{color:'grey'}}>Able To Be Set.<text style={{color:'dodgerblue'}}>Back And Reset Your Password</text></text>
           </div>
           </div>
           <Link to={"/changepswd"}>
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:20}} className="bg-linear">
    <div style={{marginTop:20, display:'flex', flexDirection:'row'}}>
        <IoKeyOutline style={{marginLeft:100,height:20, width:20, color:'white', marginTop:20}}/>
    <text style={{ color:'white', marginTop:20, marginLeft:10}}>Reset Password</text>
    </div>
</div>
</Link>
<Link to={"/home"}>
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:20}}>
    <div style={{marginTop:20, display:'flex', flexDirection:'row'}}>
        <IoHome style={{marginLeft:110,height:20, width:20, color:'dodgerblue'}}/>
    <text style={{ color:'dodgerblue'}}>Back to Home</text>
    </div>
</div>
</Link>
        </div>
    )
}