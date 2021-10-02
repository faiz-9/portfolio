import React, { useState, useEffect } from "react";

import "./darkstyle.css";

function DarkMode() {
  const storedDarkMode = localStorage.getItem("DARK_MODE");

  const [darkMode, setDarkMode] = useState(storedDarkMode);
  const toggleDarkMode = () => setDarkMode(darkMode ? false : true);

  useEffect(() => {
    localStorage.setItem("DARK_MODE", darkMode);
  }, [darkMode]);

  return (
    <div className="App" data-theme={darkMode ? "dark" : ""}>
      <h1>Hello, world!</h1>
      <h2>
        Let's create a dark mode toggle that persists when the page is reloaded.
      </h2>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
    </div>
  );
}

export default DarkMode;
