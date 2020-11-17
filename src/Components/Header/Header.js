import React from "react";
import shortcut from "../../Assets/shortcut.png";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <h3>e-estonia</h3>
      <ul>
        <li>home</li>
        <li>solutions</li>
        <li>services</li>
        <li>about us</li>
        <li>blog</li>
        <li>toolkit</li>
        <li>vr estonia</li>
        <img src={shortcut} alt="shortcut" />
      </ul>
    </div>
  );
};

export default Header;
