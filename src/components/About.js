import React from "react";
import AboutMeImage from "../images/aboutMeImage.jpg"

const About = () => {
  return (
    <div class="aboutMeMain">
      <p className="aboutHeader">About me</p>
      <p className="aboutHeader">Passionate about software development</p>
      <div className="aboutMeContainer">
      
        <div className="aboutMe">
          <p className="p1">
            I’m a 46 year old mum of three who has just discovered, be it late
            in life, a real passion for web development after attending a three
            week coding course at Code Nation, Chester. I am now enroled on
            their 12 week bootcamp an immersive programme which gives students
            the opportunity to gain the skills needed to become a technical
            professional.
          </p>
          <div className="aboutMeImageFrame">
            <img src={AboutMeImage} className="aboutMeImage" alt="aboutMe" />
          </div>
          <p>
            Here I have been able to create small projects using JavaScript,
            React, Html and CSS. This experience has given me the confidence to
            aim for a new career in the digital sector.
          
         
          
            Coding energises me, challenges me and pushes me to be resourceful.
            I really enjoy problem solving, working collaboratively and I am
            excited to be working in a field where there is so much more to
            learn.
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default About;
