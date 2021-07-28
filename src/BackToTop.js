import React, { useEffect } from "react";
import "./backToTop.css";

const BackToTop = () => {
  useEffect(() => {
    const i = document.querySelector(".move__to__top__icon");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) {
        i.style.display = "grid";
      } else {
        i.style.display = "none";
      }
    });
  });

  return (
    <a href="#home">
      <div className="move__to__top__icon">
        <i className="fa fa-chevron-up" aria-hidden="true"></i>
      </div>
    </a>
  );
};

export default BackToTop;
