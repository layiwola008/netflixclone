import React, { useContext } from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings, PowerSettingsNew } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { logout } from "../../context/authContext/AuthActions";
import { AuthContext } from "../../context/authContext/AuthContext";

export default function Topbar() {
  const { dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch(logout())
  }

  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <Link to="/" className="link">
          <div className="topLeft">
            <span className="logo">Netflix Admin</span>
          </div>
        </Link>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <div className="userProfile">
            <img
              src="https://www.morganstanley.com/content/dam/msdotcom/people/tiles/isaiah-dwuma.jpg.img.490.medium.jpg/1594668408164.jpg"
              alt=""
              className="topAvatar"
            />
            <div className="userMenu">
              <PowerSettingsNew className="logoutButton" onClick={handleLogout} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
