import { Avatar } from "@material-ui/core";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src="./assets/fit.jpg" alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Mark Lusala</h2>
        <h4>lusalamark17@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you </p>
          <p className="sidebar__statNumber">5000</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on posts</p>
          <p className="sidebar__statNumber">577680</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("design")}
        {recentItem("developer")}
        {recentItem("software engineering")}
        {recentItem("typescript")}
        {recentItem("ethical hacking")}
      </div>
    </div>
  );
}

export default Sidebar;
