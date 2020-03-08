import React from "react";
import Project from "./Project";
import GoogleFontsClone from "../images/googleFontsClone.png";
import Calculator from "../images/calculator.png";
import DiceGame from "../images/diceGame.png";
import ToDoList from "../images/toDoList.png";

const Projects = () => {
  const myProject = [

    {
      title: "Calculator",
      link: "https://jenny33141.github.io/calculator/",
      image: Calculator
    },

    {
      title: "2 Player Dice Game",
      link: "https://jenny33141.github.io/dicegameplayer2/",
      image: DiceGame
    },
    
    {
      title: "To Do List",
      link: "https://jenny33141.github.io/toDoList/",
      image: ToDoList
    },
    
   { title: "Google Fonts Clone",
    link: "https://jenny33141.github.io/gfont-clone-challenge/",
    image: GoogleFontsClone
  },
  ];

  return (
    <div className="projectContainer">
      <h1 className="projectsHeader">My Projects</h1>
      <div className="main-project-container">
        {myProject.map(project => {
          return <Project projectdata={project} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
