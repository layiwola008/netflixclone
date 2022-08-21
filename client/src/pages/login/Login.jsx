import {Link} from "react-router-dom";
import { useContext } from "react";
import { useState } from "react";
import { login } from "../../authContext/apiCalls";
import {AuthContext} from "../../authContext/AuthContext";
import "./login.css";

export default function Login() {

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const {dispatch} = useContext(AuthContext);

const handleLogin = (e) => {
e.preventDefault();
login({email, password}, dispatch);
}
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
            alt=""
          />
        </div>
      </div>
      <div className="container">
       <form>
        <h1>Sign In</h1>
        <input type="email" placeholder="Email or phone number" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        <button className="loginButton" onClick={handleLogin}>Sign In</button>
        <Link to="/register" className="link">
        <span>
          New to Netflix? <b>Sign up now.</b>
        </span>
        </Link>
        <small>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. <b>Learn more</b>.
        </small>
       </form>
      <div>
        <a href="https://netflixlayi.herokuapp.com/" style={{textDecoration: "none", color: "white", fontSize: "12px"}}>
        Admin
        </a>
      </div>
      </div>
    </div>
  );
}
