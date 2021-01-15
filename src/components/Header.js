import React, { Component } from "react";
import "./css/header.css";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <header className="header" id="masthead">
          <nav className="links">
            <li style={linkStyle} className="link">
              CreativeClicks
            </li>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  marginRight: "20px",
  marginLeft: "20px",
};

export default Header;
