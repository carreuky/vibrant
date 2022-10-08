import React from "react";
import {Link} from "react-router-dom";
// import { FaDigitalOcean } from "react-icons/fa";

export default function Navbar() {
  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "20px",
    fontWeight: "300",
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg  navbar-light">
        <div className="container-fluid">
          <p
            className="navbar-brand "
            style={{ fontSize: "35px", color: "#0D7CAC", fontWeight: "300" }}
          >
            Vibrant
          </p>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse text-center w-25" id="navmenu">
            <ul className="navbar-nav ms-auto">
            <li className="nav-item  mx-3">
                <a href="#products" className="nav-link" style={colorTxt}>
                 <Link to='/' style={{textDecoration: 'none'}}>Home </Link>
                </a>
              </li>
              <li className="nav-item  mx-3">
                <a href="#products" className="nav-link" style={colorTxt}>
                <Link to='/events' style={{textDecoration: 'none'}}>Events</Link>
                </a>
              </li>
              <li className="nav-item mx-3">
                <a href="#services" className="nav-link" style={colorTxt}>
                <Link to='/login' style={{textDecoration: 'none'}}>Login</Link>
                </a>
              </li>
              <li className="nav-item mx-2">
              <Link to='/signup' style={{textDecoration: 'none'}}>
                <a
                  href="#contact"
                  className="nav-link bg-primary text-white px-4 rounded"
                  style={{
                    backgroundColor: "#0D7CAC",
                    fontSize: "18px",
                    fontWeight: "600",
                    padding: '9px 40px',
                  }}
                >
                 Post Event
                </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}