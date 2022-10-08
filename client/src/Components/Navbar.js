import React from "react";
// import { FaDigitalOcean } from "react-icons/fa";

export default function Navbar() {
  const colorTxt = {
    color: "#0D7CAC",
    fontSize: "20px",
    fontWeight: "300",
  };
  return (
    <div>
      <nav class="navbar navbar-expand-lg  navbar-light">
        <div class="container-fluid">
          <a
            href="#"
            class="navbar-brand "
            style={{ fontSize: "35px", color: "#0D7CAC", fontWeight: "300" }}
          >
            Vibrant
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse text-center w-25" id="navmenu">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item  mx-3">
                <a href="#products" class="nav-link" style={colorTxt}>
                  Events
                </a>
              </li>
              <li class="nav-item mx-3">
                <a href="#services" class="nav-link" style={colorTxt}>
                  Login
                </a>
              </li>
              <li class="nav-item mx-2">
                <a
                  href="#contact"
                  class="nav-link bg-primary text-white px-4 rounded"
                  style={{
                    backgroundColor: "#0D7CAC",
                    fontSize: "18px",
                    fontWeight: "300",
                    padding: '9px 40px',
                  }}
                >
                  Post Event
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}