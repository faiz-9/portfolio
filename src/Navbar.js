import React, { useState, useEffect } from "react";
import "./Navbar.css";
import profile from "./images/profile.png";
import hamburger from "./images/icon-hamburger.svg";
import closeBurger from "./images/icon-close.svg";
import NavbarMain from "./NavbarMain";

const Navbar = (props) => {
  const [current, setCurrent] = useState(true);

  const toggler = () => {
    let nav = document.querySelector("nav");
    let nav_list = document.querySelector(".mob-nav-list");
    return (
      setCurrent(!current),
      nav.classList.toggle("new-nav"),
      nav_list.classList.toggle("show")
    );
  };

  useEffect(() => {
    NavbarMain();
    let switcher = document.querySelector(".switcher");
    if (localStorage.getItem("darkMode") === "dark") {
      switcher.checked = true;
    }
  });

  return (
    <nav>
      <div className="logo">
        <div className="profile">
          {/* <img src={profile} width="35px" height="35px" /> */}
          {/* <div className="toggler">
            <label className="switch">
              <input
                type="checkbox"
                onClick={props.modeToggler}
                className="switcher"
              />
              <span className="slider round"></span>
            </label>
          </div> */}

          {/* 24 NOV  */}
          <div className="nov24">
            <input
              type="checkbox"
              className="switcher"
              id="chk"
              onClick={props.modeToggler}
            />
            <label class="label" for="chk">
              <i class="fa fa-moon-o"></i>
              <i class="fa fa-sun-o"></i>

              <div class="ball"></div>
            </label>
          </div>

          {/* 24 NOV  */}
        </div>
        {/* <div className="profile-text" style={{ marginLeft: "10px" }}>
          Set Mode
        </div> */}
      </div>

      <ul className="nav-list">
        <li>
          <a href="#home" className="active f-home">
            Home
          </a>
        </li>

        <li>
          <a href="#skills" className="f-skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="f-projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="f-contact">
            Contact
          </a>
        </li>
      </ul>
      <div className="burger" onClick={toggler}>
        <img src={current ? hamburger : closeBurger} />
      </div>

      <ul className="mob-nav-list">
        <li className="gvh">
          <a href="#home" className="active small-home">
            Home
          </a>
        </li>

        <li>
          <a href="#skills" className="small-skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="small-projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#contact" className="small-contact">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
