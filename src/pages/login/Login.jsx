import React from "react";
import "./login.css";

export default function Login() {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">KAM PICK US</h3>
          <span className="loginDesc">
            Connect with friends and the world around you with KAM PICK US
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input className="loginInput" placeholder="Email" />
            <input className="loginInput" placeholder="Password" />
            <button className="loginBottom">Log In</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterBottom">Create New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}
