import React from "react";
import Navbar from "./Navbar";

import "./App.css";

import FrontPage from "./FrontPage";
import Skills from "./Skills";
import ProjecGallery from "./ProjecGallery";
import ContactForm from "./ContactForm";
import Footer from "./Footer";
import BackToTop from "./BackToTop";
const App = () => {
  return (
    <>
      <Navbar />
      <FrontPage />
      <Skills />
      <ProjecGallery />
      <ContactForm />
      <Footer />
      <BackToTop />
    </>
  );
};

export default App;
