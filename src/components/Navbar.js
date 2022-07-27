import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [Time, setTime] = useState("");
  function showTime() {
    var display = new Date().toLocaleTimeString();
    setTime(display);
  }
  setTimeout(showTime, 1000);
  return (
    <div className="Navbar">
      <nav
        className={`navbar navbar-expand-lg text-${
          props.ThemeMode === "light" ? "dark" : "light"
        } bg-${props.ThemeMode} `}
      >
        <div className="container-fluid">
          <img
            className="border border-1 border-info rounded  mx-1"
            src="text-util-logo.png"
            height="40"
            alt=""
          />
          <Link
            className={`navbar-brand mx-4 text-${
              props.ThemeMode === "light" ? "dark" : "light"
            }`}
            to="/"
          >
            {props.navbarTitel}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" font-monospace navbar-nav me-auto mb-2 mb-lg-0 border border-2 rounded-4 mx-1 my-1 p-1">
              <li className="nav-item">
                <Link
                  className={`nav-link active text-${
                    props.ThemeMode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="Contact_us">
                <Link
                  className={`nav-link active text-${
                    props.ThemeMode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/contact"
                >
                  Contact Us
                </Link>
              </li>
              <li className="About_us">
                <Link
                  className={`nav-link active text-${
                    props.ThemeMode === "light" ? "dark" : "light"
                  }`}
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </Link>
              </li>
            </ul>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="23"
              fill="currentColor"
              className="bi bi-clock"
              viewBox="0 0 16 16"
            >
              <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
              <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
            </svg>
            <div
              className="border border-2 rounded-5 mx-1 p-1"
              id="clock mx-1 my-2"
            >
              {Time}
            </div>
            <ul className="p-2 nav navbar-nav ml-auto">
              <Link to="/signin">
                <button type="button" class="btn btn-outline-success mx-1">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button type="button" class="btn btn-outline-warning mx-1">
                  Sign up
                </button>
              </Link>
            </ul>

            <div className="form-check form-switch mx-1">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >
                Dark Mode
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.prototype = {
  navbarTitel: PropTypes.string.isRequired,
};
Navbar.defaultProps = {
  navbarTitel: "enter nanvbar titel",
};
