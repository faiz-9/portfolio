import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
// import Loader from "react-loader-spinner";
import Loader from "./Loader";

import "./App.css";

import FrontPage from "./FrontPage";
import Skills from "./Skills";
import ProjecGallery from "./ProjecGallery";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

const App = () => {
  // ON PAGE LOADING
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  // DARK MODE
  const [mode, setMode] = useState("light");

  let darkMode = localStorage.getItem("darkMode");

  useEffect(() => {
    if (localStorage.getItem("darkMode") === "dark") {
      setMode("dark");
      document.body.classList.add("dark__theme__bg");
    }
  }, []);

  const modeToggler = () => {
    darkMode = localStorage.getItem("darkMode");
    if (mode === "light") {
      setMode("dark");
      localStorage.setItem("darkMode", "dark");
      console.log("SET TO DARK");
      document.body.classList.add("dark__theme__bg");
    } else if (mode === "dark") {
      setMode("light");
      localStorage.setItem("darkMode", null);
      document.body.classList.remove("dark__theme__bg");
      console.log("SET TO LIGHT");
    }
  };

  // DARK MODE

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar mode={mode} modeToggler={modeToggler} />
          <FrontPage mode={mode} />
          <Skills mode={mode} />
          <ProjecGallery mode={mode} />
          <ContactForm />
          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
};

export default App;
