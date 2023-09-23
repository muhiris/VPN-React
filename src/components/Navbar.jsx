import React from "react";
import { IoSettingsOutline, IoNotificationsOutline } from "react-icons/io5";
import homeSub from "../assets/home-subs.svg";
import homeUnSub from "../assets/home-unsub.svg";
import LinearBtn from "./LinearBtn";
function Navbar({ login }) {
  return login ? (
    <div className="flex items-center justify-between w-full">
      <div className="hexagon">
        <div className="hexagon-inner">
          <IoSettingsOutline className="text-3xl text-black" />
        </div>
      </div>
      <img src={homeSub} alt="" className="w-44" />
      <div className="hexagon">
        <div className="hexagon-inner">
          <IoNotificationsOutline className="text-3xl text-black" />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-between gap-6  ">
      <img src={homeUnSub} alt="" className="w-44" />
      <LinearBtn text="🔥 Go Premium" />
      <div className="hexagon">
        <div className="hexagon-inner">
          <IoSettingsOutline className="text-3xl text-black" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
