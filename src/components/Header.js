import React, { useState } from "react";
import Logo from "../assets/img/logo.png";
import ProfilePic from "../assets/img/profile.svg";
import Bell from "../assets/img/notification-bell.svg";
import Hamburger from "hamburger-react";
import "../index.css";

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="header">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-wrapper">
        <div className="header-container">
          <div className="burger-icon">
            <Hamburger color="#ffffff" toggled={isOpen} toggle={setOpen} />
          </div>
          <div className="header-content">
            <input
              id="search"
              type="text"
              placeholder="Search"
              className="search-bar"
            />
            <div className="right">
              <div className="notification-icon">
                <img src={Bell} alt="Notification Icon" />
                <div className="count-container">
                  <span>6</span>
                </div>
              </div>
              <div className="profile-container">
                <div className="profile">
                  <img src={ProfilePic} alt="Profile" className="profile-pic" />
                </div>
                <div className="profile-info">
                  <p className="name">Moni Roy</p>
                  <p className="role">Admin</p>
                </div>
                <div className="dropdown-arrow" />
              </div>
            </div>
          </div>
        </div>
        <div className={`burger-menu ${isOpen ? "open" : ""}`}>
          <div className="menu-wrapper">
            <ul>
              <li>Alerts</li>
              <li>Training</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
