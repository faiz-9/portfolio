import React from "react";
import "./Loader.css";
import FaizanLoader from "../src/images/faizan_logo.png";

const Loader = () => {
  const getMode = localStorage.getItem("darkMode");
  var bgColor;

  if (getMode === "dark") {
    bgColor = "#121212";
  } else {
    bgColor = "#e8e8e8";
  }

  return (
    <>
      <div className="loader_parent" style={{ backgroundColor: bgColor }}>
        <div class="loader">
          <img src={FaizanLoader} />
        </div>
      </div>
    </>
  );
};

export default Loader;
