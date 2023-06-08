import React from "react";
import "./rightbar.css";
import Online from "../online/Online";
import { Users } from "../../dummyData";

export default function Rightbar({ profile }) {
  const HomeRightbar = () => {
    return (
      <>
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
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h1 className="rightbarTitle">User Information</h1>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City</span>
            <span className="rightbarInfoValue">New York</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From</span>
            <span className="rightbarInfoValue">Madrid</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship</span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h1 className="rightbarTitle">User Friends</h1>

        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/9.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>

          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/8.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/17.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/14.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/15.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rigntbarFollowingImg"
              src="assets/person/13.jpeg"
              alt=""
            />
            <span classNmae="rightbarFollowingName">Jon Commy</span>
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="rightbarContainer">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
