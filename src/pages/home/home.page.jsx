import React from "react";
import HomeText from "../../components/home_text/home_text.component";
import "./home.page.scss";

const Home = () => {
  return (
    <div className="home-container">
        <div className="text-component"> <HomeText/> </div>
        <div className="sub-text top-right"><span className="quotes">&#8220;</span> Detail-oriented with objective to develop user-friendly websites using React and with ability to manage time efficiently due to my prior experience working as a Freelancer. <span className="quotes">&#8220;</span></div>
        <div className="sub-text bottom-left"><span className="quotes">&#8220;</span> Frontend developer from Cairo, with a passion for web development and passionate about languages such as HTML, CSS, and Javascript. <span className="quotes">&#8220;</span></div>
    </div>
  );
};

export default Home;
