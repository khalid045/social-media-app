import React from "react";
import "./online.css";

export default function Online({ user }) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img className="rightProfileImg" src={user.profilePicture} alt=" " />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.username}</span>
    </li>
  );
}
