import React,{useState} from "react";
import Navbar from "../components/Navbar";
import { IoPower } from "react-icons/io5";
function Home() {
    const [bgColor, setBgColor] = useState("bg-red bg-opacity-5");
  
    const handleClick = () => {
      setBgColor("bg-primary");
  
    }
  
  return (
    
    <div className="flex-center flex-col">
     <Navbar login={true}/>
     <button
      className={`vpnBtn ${bgColor}`}
      onClick={handleClick}
    >
      <div className="hexagon-inner flex gap-4 flex-col">
        <IoPower className="text-3xl text-secondary" />
        <p>Tap to Connect</p>
      </div>
    </button>
    </div>
  );
}

export default Home;
