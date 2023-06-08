import React from "react";
import "./topbar.css";
import { Search, Person, Chat, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">KAM PICK US </span>
      </div>
      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input placeholder="Search for Somnething" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">HomePage </span>
          <span className="topbarLink">TimeLine </span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">6</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">10</span>
          </div>
        </div>
        <img className="topbarImg" src="/assets/person/15.jpeg" alt="" />
      </div>
    </div>
  );
}
