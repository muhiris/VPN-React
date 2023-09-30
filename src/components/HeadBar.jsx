import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function HeadBar({txt, loc}){

    return(
        <div className="flex-center flex-row mt-6">
            <div className="flex-center flex-row">
                <Link to={loc}>
                <BsArrowLeftCircle className="text-3xl mr-16"/>
                </Link>
            <text className="mr-10 w-40">{txt}</text>
            </div>
            </div>
    )
}