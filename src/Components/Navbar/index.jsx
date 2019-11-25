import React from "react";
import "./Navbar.css";
// import bootstrap from "bootstrap";
import navLogo from "/src/f4d.png";

export default class Navbar extends React.Component {
  render() {
    const links = [
      { name: "Recipes", link: "/recipes" },
      { name: "Cart", link: "/cart" },
      { name: "Profile", link: "/profile" }
    ];
    const navList = (
      <ul className="nav-list">
        {links.map((link, indx) => (
          <li key={indx}>
            <a href={link.link}>{link.name}</a>
          </li>
        ))}
      </ul>
    );
    return (
      <div className="nav">
        <a href="/">
          <img src={navLogo} className="nav-logo" alt="logo" />
        </a>
        {navList}
      </div>
    );
  }
}
