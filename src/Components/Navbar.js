import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {


  

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <a className="navbar-brand" href="/">
        {props.title}
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              {props.aboutText}
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* Custom Color Scheme */}
          <div className="colorSchemeContainer">
            <div onClick={props.redTheme} style={{background : props.color === 'red'?'white':'red'}} className="colorCircle"id="red"></div>
            <div onClick={props.greenTheme} style={{background : props.color === 'green'?'white':'green'}} className="colorCircle" id="green"></div>
            <div onClick={props.orangeTheme} className="colorCircle" style={{background : props.color === 'orange'?'white':'orange'}} id="violet"></div>
            <div onClick={props.violetTheme} className="colorCircle" style={{background : props.color === 'violet'?'white':'violet'}} className="colorCircle" id="orange"></div>
          </div>
          <div
            className={`custom-control custom-switch my-3 text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              type="checkbox"
              className="custom-control-input"
              id="customSwitch1"
              onClick={props.toggleMode}
            />
            <label className="custom-control-label" htmlFor="customSwitch1">
              Mode
            </label>
          </div>
        </form>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  title: "Lovely Kamboj",
  aboutText: "This is about Text",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
