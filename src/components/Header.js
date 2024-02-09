import React from "react";
import Logo from "../assets/img/logo.png";
import ProfilePic from "../assets/img/profile.svg";
import Bell from "../assets/img/notification-bell.svg";
import "../index.css";

function Header() {
  return (
    <div className="header">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="header-content">
        {/* Search Bar */}
        <input type="text" placeholder="Search" className="search-bar" />
        <div className="right">
          {/* Notification icon */}
          <div className="notification-icon">
            <img src={Bell} alt="Notification Icon" />
            <div className="count-container">
              <span>6</span>
            </div>
          </div>
          {/* TODO: check which profile pic you ended up using to clean the assets */}
          <div className="profile">
            <img src={ProfilePic} alt="Profile" className="profile-pic" />
          </div>
          {/* Profile Info */}
          <div className="profile-info">
            <p className="name">Moni Roy</p>
            <p className="role">Admin</p>
          </div>
          {/* Dropdown Arrow */}
          <div className="dropdown-arrow" />
        </div>
      </div>
    </div>
  );
}

export default Header;
