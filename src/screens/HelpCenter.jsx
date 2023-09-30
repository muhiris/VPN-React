import React from "react";
import HeadBar from "../components/HeadBar";
import group1 from "../assets/Group.svg";
import { IoSearch } from "react-icons/io5";
import HowToDo from "../components/HowToDo";
import vertical from "../assets/Vertical.svg";

export default function HelpCenter(){


    return(
        <div className="flex-center flex-col mt-4">
        <HeadBar txt="FAQ" loc={"/usersetting"}/>
        <div className="flex flex-row">
            <div className="flex flex-column mr-14">
        <div style={{backgroundImage:`url(${group1})`, height:180, width:280, marginTop:10}}>
        <img src={vertical} className="mt-20 ml-56 h-20 w-20"/>
        </div>
        </div>
        </div>
        <div className="flex-center flex-row">
        <h3 className="font-bold">Do You Need <text style={{color:'dodgerblue'}}>Help?</text></h3>
        <div className="ml-20">
        <IoSearch className="w-4 h-4"/>
        </div>
        </div>
        <HowToDo head={"Ho To Do This?"} innerhead={"Ho To Do This?"} text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."}/>
        <HowToDo head={"Ho To Do This?"} innerhead={"Ho To Do This?"} text={"In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available."}/>
        </div>
    )
}