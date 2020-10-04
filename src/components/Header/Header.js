import React from "react";
import "./Header.css";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <h1>Find your City</h1>
        <p>Find out temperature, weather...</p>
      </div>
    )
  }
}

export default Header;