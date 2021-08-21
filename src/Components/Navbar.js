import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <Link className="navbar-brand" to="/">
        {props.title}
      </Link>
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
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">
              {props.aboutText}
            </Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          {/* Custom Color Scheme */}
          <div className="colorSchemeContainer">
            <div
              onClick={props.redTheme}
              style={{ background: props.color === "red" ? "white" : "red" ,
              boxShadow: "red 0px 0px 6px 1px"
            }}
              className="colorCircle"
              id="red"
            ></div>
            <div
              onClick={props.greenTheme}
              style={{
                background: props.color === "green" ? "white" : "green",
                boxShadow: "green 0px 0px 6px 1px"
              }}
              className="colorCircle"
              id="green"
            ></div>
            <div
              onClick={props.violetTheme}
              className="colorCircle"
              style={{
                background: props.color === "violet" ? "white" : "violet",
                boxShadow: "violet 0px 0px 6px 1px"
                
              }}
              id="orange"
            ></div>
            <div
              onClick={props.orangeTheme}
              className="colorCircle"
              style={{
                background: props.color === "orange" ? "white" : "orange",
                boxShadow: "orange 0px 0px 6px 1px"

              }}
              id="violet"
            ></div>
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
