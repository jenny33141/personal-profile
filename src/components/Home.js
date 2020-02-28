import React from "react";
import HomePage from "../images/homePage.png";

const Home = () => {
  return (
    <div className="home">
      <p class="homeText">Jenny Collings</p>
      <p class="homeText2">Aspiring junior developer from Chester.</p>
      <img src={HomePage} className="homePageImg" alt="HomePage" />
      <p>Contact me</p>
    </div>
  );
};

export default Home;
