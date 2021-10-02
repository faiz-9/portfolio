import React, { useState } from "react";
import ProjectApi from "./ProjectApi";
import "./GalleryStyling.css";

const ProjecGallery = (props) => {
  const [items, setItems] = useState(ProjectApi);

  const filterItem = (catItem) => {
    const updatedItems = ProjectApi.filter((curr) => {
      return curr.category === catItem;
    });
    setItems(updatedItems);
  };

  const bgSet = (e) => {
    const target = e.target.parentElement;
    console.log(`TARGET IS ${target} `);

    const children = target.parentElement.children;
    console.log(`CHILDREN IS ${children}`);

    Array.from(children).forEach((child) => {
      console.log(child);
      if (child.classList.contains("active-project")) {
        child.classList.remove("active-project");
      }
    });
    target.classList.add("active-project");
  };

  let button_lists = document.querySelectorAll(".projects-list li");
  console.log(button_lists);
  if (props.mode === "dark") {
    for (let i = 0; i < button_lists.length; i++) {
      button_lists[i].style.color = "white";
      console.log(button_lists[i]);
    }
  } else {
    for (let i = 0; i < button_lists.length; i++) {
      button_lists[i].style.color = "";
    }
  }

  return (
    <>
      <div className="projects_container" id="projects">
        <div className="heading__container">
          <h1 className="projects-heading">PROJECTS</h1>
          <p className="about__underline ">&nbsp;</p>
        </div>
        <div className="button_filters">
          <ul className="projects-list">
            <li className="projects-common-list active-project" onClick={bgSet}>
              <p onClick={() => setItems(ProjectApi)}>All</p>
            </li>

            <li className="projects-common-list " onClick={bgSet}>
              <p onClick={() => filterItem("frontend")}>Front End</p>
            </li>

            <li className="projects-common-list " onClick={bgSet}>
              <p onClick={() => filterItem("javascript")}>Javascript</p>
            </li>

            <li className="projects-common-list " onClick={bgSet}>
              <p onClick={() => filterItem("php")}>Php</p>
            </li>

            <li className="projects-common-list " onClick={bgSet}>
              <p onClick={() => filterItem("react")}>React</p>
            </li>
          </ul>
        </div>

        <div className="projects_styling">
          {items.map((elem) => {
            const { id, category, image, name, link } = elem;
            return (
              <div className="projects" key={id}>
                <div
                  className="project_images post settle_size"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="post-s">
                    <h3 style={{ marginBottom: "5px" }}>{name} </h3>
                    <a id="st" target="_blank" href={link}>
                      View Site
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProjecGallery;
