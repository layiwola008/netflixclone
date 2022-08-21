import { useContext } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./app.css";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Watch from "./pages/watch/Watch";
import {AuthContext} from "./authContext/AuthContext";

function App() {
  const {user} = useContext(AuthContext);
  return ( 
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={user ? <Home /> : <Navigate to="/register" />}
          />
          <Route
            exact
            path="/register"
            element={!user ? <Register /> : <Navigate to="/" />}
          />
          <Route
            exact
            path="/login"
            element={!user ? <Login /> : <Navigate to="/" />}
          />
          {user && (
            <>
              <Route path="/movies" element={<Home type="movie" />} />
              <Route path="/series" element={<Home type="series" />} />
              <Route path="/watch" element={<Watch />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
      {/* <Home /> */}
      {/* <Register /> */}
      {/* <Login /> */}
    </div>
  );
}

export default App;
