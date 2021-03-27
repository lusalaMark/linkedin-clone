import SearchIcon from "@material-ui/icons/Search";
import React from "react";

function Header() {
  return (
    <div className="header">
      <div className="heade__left">
        <img src="" alt="" />

        <div className="header__search">
          {/*SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
}

export default Header;
