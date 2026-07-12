import React from "react";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div>
      <div>
        <img src={logo} alt="" className="md:w-30 w-25 m-2" />
      </div>
    </div>
  );
}

export default Logo;
