import React, { useEffect } from "react";
import "./FrontPage.css";
import FrontPageMain from "./FrontPageMain.js";
import profile from "./images/profile.jfif";
function FrontPage(props) {
  useEffect(() => {
    FrontPageMain();
  }, []);

  console.log(props.mode);

  return (
    <>
      <div className="whole_wrapper" id="home">
        <div
          className={`${
            props.mode === "light"
              ? "front-wrapper"
              : "front-wrapper dark__theme__bg"
          }`}
        >
          <img
            className="profile__img"
            src={profile}
            style={{
              clipPath:
                " polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
            }}
          />
          <div
            className={`${
              props.mode === "light"
                ? "text-container"
                : "text-container dark__theme__color"
            }`}
          >
            <span className="name">Hi, I'm </span>
            <span className="highlight">Faizan Ahmed Siddiqui</span>
            <p className="title">
              <span className="name">I'm a</span> <span className="text"></span>
              <span className="cursor">&nbsp;</span>
            </p>
            <p>
              I am currently pursuing Btech CSE, I have worked as an intern for
              2 months with Cillyfox and 2 months as a Full Stack Developer with
              a Freelance Company.
              <br />
              <span className="quote">
                “I believe that stripping the website down to the basics and
                just doing a few things really well, makes it very attractive.”
              </span>
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FrontPage;
