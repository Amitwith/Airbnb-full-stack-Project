import axios from "axios";
import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { authDataContext } from "../../context/authContaxt";
function ListHome() {
  const [showPopUp, setshowPopUp] = useState(false);
  let navigate = useNavigate();
  const { serverUrl } = useContext(authDataContext);
  const handelLogOut = async () => {
    try {
      const result = await axios.post(serverUrl + "/api/auth/logout", {
        withCredentials: true,
      });
      console.log(result);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center md:gap-10 relative gap:7">
        <span className="text-[18px] rounded-[30px] hover:bg-[#ded9d9] px-5 py-3 cursor-pointer font-[300px] hidden md:block ">
          List Your Home
        </span>
        <button
          className="flex items-center justify-center gap-5 border-1px  border-[#8d8c8c] rounded-[30px] md:px-7 px-4 py-2 hover:shadow-lg"
          onClick={() => setshowPopUp((showPopUp) => !showPopUp)}
        >
          <span>
            <CgProfile className="w-5 h-5 cursor-pointer" />
          </span>
          <span>
            <GiHamburgerMenu className="w-7 h-7 cursor-pointer" />
          </span>
        </button>
        {showPopUp && (
          <div className="md:w-70 md:h-75 w-50 h-60 bg-slate-50 absolute z-10 top-[110%] right-[10%] rounded-[20px] border-1px border-[#aaa9a9]">
            <ul className="w-full md:h-75 h-60 flex justify-around items-start flex-col md:text-[20px] text-[15px] ">
              <li
                className="w-70 px-5 py-2 cursor-pointer hover:bg-[#f4f3f3] rounded-3xl"
                onClick={() => navigate("/login")}
              >
                Login
              </li>
              <li
                className="w-70 px-5 py-2 cursor-pointer hover:bg-[#f4f3f3] rounded-3xl"
                onClick={handelLogOut}
              >
                Logout
              </li>
              <div className="w-full h-0.5 bg-[#c1c0c0]"></div>
              <li className="w-70 px-5 py-2 cursor-pointer hover:bg-[#f4f3f3] rounded-3xl">
                List Your Home
              </li>
              <li className="w-70 px-5 py-2 cursor-pointer hover:bg-[#f4f3f3] rounded-3xl">
                My Listing
              </li>
              <li className="w-70 px-5 py-2 cursor-pointer hover:bg-[#f4f3f3] rounded-3xl">
                Booking
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default ListHome;
