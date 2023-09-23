import React, { useState } from "react";
import {AiOutlineEyeInvisible} from "react-icons/ai";
import {LiaUserSolid} from "react-icons/lia";
function InputField({ label, type, id, placeholder }) {
  let labelHTML = label.toLowerCase();
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const handlePassword = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    if (newPassword.length > 7) {
      setPasswordError("");
    } else {
      setPasswordError("Password must be at least 8 characters.");
    }
  };
  return (
    <>
      {type === "password" ? (
        <>
          <div className="flex items-center text-gray-800">
          <LiaUserSolid className="text-2xl mr-2"/>
          <input
            type={type}
            id={id}
            className=" py-3 w-4/5 pl-10 outline-none text-gray-800 rounded-full shadow-lg md:w-1/3 lg:w-1/5"
            placeholder={placeholder}
            onChange={handlePassword}
            required
          />
          <AiOutlineEyeInvisible className="text-2xl mr-2"/>
          </div>
         

          <p className="text-red-500">{passwordError}</p>
        </>
      ) : (
        <>
        <div className="flex items-center py-3 pl-6  text-gray-800 rounded-full shadow-lg w-4/5 md:w-1/3 lg:w-1/5" >
          <LiaUserSolid className="text-2xl mr-2"/>
          <input
            type={type}
            id={id}
            className="  outline-none w-full"
            placeholder={placeholder}
            required
          />
          </div>
        </>
      )}
    </>
  );
}

export default InputField;
