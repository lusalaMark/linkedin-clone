import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="heade__left">
        {/*<img src="inkedin/src/assets/logo.png" alt="LINKEDIN" />*/}
        <div className="header__search">
          {/*SearchIcon */}
          <SearchIcon />
          <input type="text" />
        </div>
      </div>

      <div className="header__right">
           
      </div>
    </div>
  );
}

export default Header;
