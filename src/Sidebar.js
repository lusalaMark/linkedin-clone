import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="" alt="" />
        <Avatar className="sidebar_avatar" />
        <h1>Mark Lusala</h1>
        <h2>lusalamark17@gmail.com</h2>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">5000</p>
        </div>
        <div className="sidebar__stat">
        <p>Views on posts</p>
          <p className="sidebar__statNumber">577680</p>
        </div>
      </div>
      <div className="sidebar__buttom">
          <p>Recent</p>
          
      </div>
    </div>
  );
}

export default Sidebar;
