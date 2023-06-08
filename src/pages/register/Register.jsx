import React from "react";
import "./register.css";

export default function Register() {
  return (
    <div className="registerContainer">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">KAM PICK US</h3>
          <span className="registerDesc">
            Connect with friends and the world around you with KAM PICK US
          </span>
        </div>
        <div className="registerRight">
          <div className="signUpBox">
            <input className="loginInput" placeholder="First Name" />
            <input className="loginInput" placeholder="Last Name" />
            <input className="loginInput" placeholder="Email" />
            <input className="loginInput" placeholder="Password" />
            <input className="loginInput" placeholder="Confirm Password" />
            <button className="loginBottom">Sign Up</button>
            <button className="loginRegisterBottom">Log Into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
