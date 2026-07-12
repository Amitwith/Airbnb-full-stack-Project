import React from "react";
import { IoSearch } from "react-icons/io5";
function SerchBar() {
  return (
    <>
      <div className=" hidden w-[36%]  flex items-center justify-center relative md:block p-5">
        <input
          type="text"
          className=" w-full py-3 px-10 pr-23 outline-0 border-2 rounded-4xl border-[#bdbaba]"
          placeholder="Ayn Where | Any Location | Any City"
        />

        <button className="  w-11 h-11 bg-red-600 rounded-[30px] text-white flex items-center justify-center absolute  cursor-pointer hover:scale-105  right-8 top-6">
          <IoSearch className="w-8 h-8 " />
        </button>
      </div>
    </>
  );
}

export default SerchBar;
