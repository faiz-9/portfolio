import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <a href="https://github.com/faiz-9" target="_blank">
          <div className="icon">
            <i className="fa fa-github"></i>
          </div>
        </a>
        <a href="https://www.instagram.com/bindaas.faiz/" target="_blank">
          <div className="icon">
            <i className="fa fa-instagram"></i>
          </div>
        </a>

        <a href="https://www.facebook.com/Nawazfan.f" target="_blank">
          <div className="icon">
            <i className="fa fa-facebook"></i>
          </div>
        </a>

        <a
          href="https://www.linkedin.com/in/faizan-ahmed-siddiqui-4a5899188/"
          target="_blank"
        >
          <div className="icon">
            <i className="fa fa-linkedin"></i>
          </div>
        </a>
      </div>
      <div className="copyright">
        <p>© Faizan Siddiqui 2021</p>
      </div>
    </footer>
  );
};

export default Footer;
