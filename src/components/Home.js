import React from "react";
import HomePage from "../images/homePage.png";
import "../styles/home.css"


const Home = () => {
  return (
    <div className="homeContainer">
    <div className="home" >
      <p class="homeText">Jenny Collings</p>
      <p class="homeText1">Aspiring junior developer </p>
      {/* <img src={YellowHome} className="homePageImg" alt="HomePage" /> */}
      <p class="homeText2">Contact me: jennycollings333@gmail.com </p>
      </div>
    </div>
  );
};

export default Home;
