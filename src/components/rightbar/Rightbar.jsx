import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ user }) {
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        <div className="birhtdayContainer">
          <img className="birthdayImg" src="assets/gift.PNG" alt="" />
          <span className="birthdatText">
            <b>Wahab Asante</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src="assets/ads.jpeg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendsList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
