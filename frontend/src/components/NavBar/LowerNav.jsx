import React from "react";
import { MdWhatshot } from "react-icons/md";
import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomParent } from "react-icons/md";
import { MdOutlinePool } from "react-icons/md";
import { GiWoodCabin } from "react-icons/gi";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { IoBedOutline } from "react-icons/io5";
import { FaTreeCity } from "react-icons/fa6";
function LowerNav() {
  return (
    <>
      <div className="w-full md:h-30 h-10 flex justify-start items-center gap-10 p-10  md:justify-center overflow-x-auto whitespace-nowrap scrollbar-hide">
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5] m-2 ">
          <MdWhatshot className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Trending</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5]  ">
          <GiFamilyHouse className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Villa</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5]  text-nowrap">
          <MdBedroomParent className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Farm House</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5]  text-nowrap">
          <MdOutlinePool className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Pool House</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5] ">
          <GiWoodCabin className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Rooms</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5] ">
          <SiHomeassistantcommunitystore className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Flat</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5] ">
          <IoBedOutline className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">PG</h3>
        </div>
        <div className="flex flex-col items-center justify-center text-[15px] hover:border-b border-[#a6a5a5] ">
          <FaTreeCity className="w-5 h-5 text-[black] hover:scale-105" />
          <h3 className="text-[#868686] ">Cabin</h3>
        </div>
      </div>
    </>
  );
}

export default LowerNav;
