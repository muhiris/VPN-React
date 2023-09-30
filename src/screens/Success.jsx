import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import {IoShieldCheckmarkSharp, IoHome, IoKeyOutline} from "react-icons/io5"
import successkey from "../assets/Successkey.svg";

export default function Success(){

    return(
        <div className="flex-center flex-col">
            <div style={{padding:40, display:'flex', flexDirection:'row'}}>
                <Link to="/changepswd">
                <BsArrowLeftCircle className="text-3xl" style={{marginRight:40}}/>
                </Link>
            <text style={{fontWeight:'bold', width:200, paddingLeft:20}}>Success</text>
            </div>
           <div style={{marginTop:10, display:'flex', flexDirection:'column'}}  className="flex-center flex-col">
            <img src={successkey} style={{color:'aqua', height:160, width:193}}/>
            <div className="flex-center flex-col mt-16">
            <text style={{fontSize:20}}>Your New Password</text>
            <text style={{fontSize:20}}>Has Been Successfully Set</text>
            <text style={{ marginTop:20, color:'grey'}}>From Now You Can Use Your <text style={{color:'dodgerblue'}}>New</text></text>
            <text style={{color:'grey'}}><text style={{color:'dodgerblue'}}>Password</text> in Your Current VPN Account</text>
           </div>
           </div>
           <Link to={"/home"}>
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:20}} className="bg-linear">
    <div style={{marginTop:20, display:'flex', flexDirection:'row'}}>
        <IoHome style={{marginLeft:100,height:20, width:20, color:'white', marginTop:20}}/>
    <text style={{ color:'white', marginTop:20, marginLeft:10}}>Go Back Home</text>
    </div>
</div>
</Link>
<Link to={"/changepswd"}>
<div style={{height:70, width:350, borderRadius:50, marginLeft:10, marginTop:10,}}>
    <div style={{marginTop:20, display:'flex', flexDirection:'row'}}>
        <IoKeyOutline style={{marginLeft:80,height:20, width:20, color:'dodgerblue'}}/>
    <text style={{ color:'dodgerblue', marginLeft:10}}>Change Password</text>
    </div>
</div>
</Link>
        </div>
    )
}