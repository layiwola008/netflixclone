import { Search, Notifications, ArrowDropDown, PowerSettingsNew } from "@material-ui/icons";
import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../authContext/AuthActions";
import { AuthContext } from "../../authContext/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const {dispatch} = useContext(AuthContext);
  const navigate = useNavigate();

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };


  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  }
  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="container">
        <div className="left">
          <Link to="/" className="link">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
          </Link>
          <Link to="/" className="link">
            <span>Homepage</span>
          </Link>
          <Link to="/series" className="link">
            <span className="navbarMainLinks">Series</span>
          </Link>
          <Link to="/movies" className="link">
            <span className="navbarMainLinks">Movies</span>
          </Link>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className="right">
          <Search className="icon" />
          <span className="kid">KID</span>
          <Notifications className="icon" />
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrh59UXvIbu9gHbxWmUeHtSz2Oe_rCM1iL-g&usqp=CAU"
            alt=""
          />
          <PowerSettingsNew className="logoutButton" onClick={handleLogout} />
          <div className="profile">
            <ArrowDropDown className="icon" />
            <div className="options">
              <span>Settings</span>
              <span onClick={handleLogout} className="logoutText">Logout</span>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
