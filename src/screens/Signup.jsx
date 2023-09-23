import React from "react";
import baseLogo from "../assets/logo-gray.svg";
import InputField from "../components/InputField";
function Signup() {
  return (
    <div className="bg-white h-full">
      <img src={baseLogo} alt="" className="w-48" />
      <h2 className="text-secondary">
        Create New The <span className="text-primary">Account!</span>
      </h2>
      <InputField
        label={"Email"}
        type={"text"}
        placeholder={"Enter Email"}
        id={"email"}
      />
    </div>
  );
}

export default Signup;
