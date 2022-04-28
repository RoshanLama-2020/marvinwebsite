import React, { useState } from "react";
import "./index.css";
import { NavItems } from "./NavItems";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="nav">
      <div className="nav-logo">
        <img src="./images/logo-1.png" alt="logo" className="logo" />
        <div className="menu-bars" onClick={toggle}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
      <nav className={isOpen ? "nav-menu active" : "nav-menu"}>
        {NavItems.map((item, id) => {
          const { title, path, cName } = item;
          return (
            <li key={id} className={cName}>
              <a href={path}>{title}</a>
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
