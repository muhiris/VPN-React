import React from "react";
import device from "../assets/Device.svg";
import HeadBar from "../components/HeadBar";
import DeviceItem from "../components/DeviceItem";
import iphone from "../assets/Iphone.svg";
import mac from "../assets/Mac.svg";
import lenovo from "../assets/Lenovo.svg";
import { Link } from "react-router-dom";

export default function Devices(){

    return(
        <div className="flex-center flex-col">
            <HeadBar txt={"Devices"} loc={"/settings"}/>
            <img src={device} className="h-40 w-80 mt-10"/>
            <DeviceItem img={iphone} text={"Iphone 14 Pro Max"} detail={"7 July 2023"} loc={"/devices"}/>
            <DeviceItem img={mac} text={"Mac Book Pro (Rich Kid)"} detail={"7 July 2023"} loc={"/devices"}/>
            <DeviceItem img={lenovo} text={"Lenovo"} detail={"7 July 2023"} loc={"/devices"}/>
           <Link to={"/devices"} className="shadow-md text-secondary rounded-full p-6 min-w-fit font-bold " style={{color:'crimson'}}>Delete</Link>
        </div>
    )
}