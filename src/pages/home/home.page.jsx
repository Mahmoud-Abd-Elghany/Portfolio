import React from "react";
import HomeText from "../../components/home_text/home_text.component";
import StickyNote from "../../components/stickynotes/sticky.component";
import "./home.page.scss";

const Home = () => {
  return (
    <div className="home-container">
        <div className="text-component"> <HomeText/> </div>
    </div>
  );
};

export default Home;
