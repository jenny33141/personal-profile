import React from "react";
import "../styles/project.css";


const Project = props => {
  return (
    <div className="header-container">
      <div className="project-container">
        <h1>{props.projectdata.title}</h1>
        <img src={props.projectdata.image} className="projectImage" />

        <a href={props.projectdata.link} classname="projectLink">
          Link to github
        </a>
      </div>
    </div>
  );
};

export default Project;
