import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import ListHome from "./ListHome";
import LowerNav from "./LowerNav";
import LowerSerchBar from "../NavBar/LowerSearchBar";

function NavBar() {
  return (
    <div>
      <div className="w-screen min-h-80px border-b border-[#dcdcdc] md:px-10 px:4 flex items-center justify-between">
        <Logo />
        <SearchBar />
        <ListHome />
      </div>
      <LowerSerchBar />
      <LowerNav />
    </div>
  );
}

export default NavBar;
