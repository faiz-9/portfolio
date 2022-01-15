import React from "react";
import "./skills.css";

const Skills = (props) => {
  let bar = document.querySelectorAll(".bar");
  let heading = document.querySelectorAll(".piechart_description h3");

  console.log(heading);

  if (props.mode === "dark") {
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "white";
    }

    for (let j = 0; j < heading.length; j++) {
      heading[j].style.color = "white";
    }
  } else {
    for (let i = 0; i < bar.length; i++) {
      bar[i].style.backgroundColor = "";
    }

    for (let j = 0; j < heading.length; j++) {
      heading[j].style.color = "";
    }
  }

  return (
    <>
      <div className="skills_wrapper" id="skills">
        <div className="skills__heading__container">
          <h1 className="skills_heading"> Skills</h1>
          <p className="about__underline__skill ">&nbsp;</p>
        </div>

        <div
          className={`${
            props.mode === "light"
              ? "skill_description_container"
              : "skill_description_container dark__theme__skills__color"
          }`}
        >
          <div className="icons_container">
            <div className="icons_awesome">
              <i className="fa fa-bolt"></i>
            </div>

            <div className="icons_description">
              <h3>Fast</h3>
              <p
                style={{
                  color: props.mode === "light" ? "#212121" : "white",
                }}
              >
                Fast load times and lag free interactions are my highest
                priority.
              </p>
            </div>
          </div>

          <div className="icons_container">
            <div className="icons_awesome">
              <i className=" fa fa-laptop"></i>
            </div>

            <div className="icons_description">
              <h3>Responsive</h3>
              <p
                style={{
                  color: props.mode === "light" ? "#212121" : "white",
                }}
              >
                My layouts will work on any device, big or small.
              </p>
            </div>
          </div>

          <div className="icons_container">
            <div className="icons_awesome">
              <i className=" fa fa-inbox"></i>
            </div>

            <div className="icons_description">
              <h3>Intuitive</h3>
              <p
                style={{
                  color: props.mode === "light" ? "#212121" : "white",
                }}
              >
                Strong preference for easy to use, intuitive UX/UI.
              </p>
            </div>
          </div>

          <div className="icons_container">
            <div className="icons_awesome">
              <i className=" fa fa-rocket"></i>
            </div>

            <div className="icons_description">
              <h3>Dynamic</h3>
              <p
                style={{
                  color: props.mode === "light" ? "#212121" : "white",
                }}
              >
                Websites don't have to be static, I love making pages come to
                life.
              </p>
            </div>
          </div>
        </div>

        <div className="skills">
          {/* <div className="piechart_container">
            <div className="piechart-image">
              <img src={piechart} className="pie_img" />
            </div>
          </div>
          <div className="piechart_note">
            <p>
              <b>Note</b>: This pie chart does not represents the exact
              percentage of skills, and also, knowledge of all these
              technologies update daily with experience.
            </p>
          </div> */}

          <div className="piechart_description">
            <li>
              <h3>HTML</h3>
              <span className="bar">
                <span className="html"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>CSS</h3>
              <span className="bar">
                <span className="css"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>BOOTSTRAP</h3>
              <span className="bar">
                <span className="bootstrap"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>JAVASCRIPT</h3>
              <span className="bar">
                <span className="js"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>PHP</h3>
              <span className="bar">
                <span className="php"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>MYSQL</h3>
              <span className="bar">
                <span className="mysql"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>AJAX</h3>
              <span className="bar">
                <span className="ajax"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>JQUERY</h3>
              <span className="bar">
                <span className="jquery"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>

            <li>
              <h3>REACT JS</h3>
              <span className="bar">
                <span className="react"></span>
                <p style={{ textAlign: "end", color: "#fff" }}></p>
              </span>
            </li>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
