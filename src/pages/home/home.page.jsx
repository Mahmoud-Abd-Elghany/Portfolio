import React from "react";
import HomeText from "../../components/home_text/home_text.component";
import "./home.page.scss";

const Home = () => {
  const subText = "Frontend developer from Egypt, with passion for web development generally and specifically for Frontend, using HTML, CSS, Javascript and React. My objective is and always would be to be better in developing user-friendly websites.";
  return (
    <div className="home-container">
        <div className="text-component"> <HomeText/> </div>
        <div className='links-list'>
                <a className='icon-home' href={"https://www.linkedin.com/in/mahmoudabdelghany/"} target="_blank" rel="noopener noreferrer">
                <div className='icon'><i class="fab fa-linkedin fa-2x"></i></div>
                </a>  
                <a className='icon-home' href={"https://github.com/Mahmoud-Abd-Elghany/"} target="_blank" rel="noopener noreferrer">
                <div className='icon'><i class="fab fa-github-square fa-2x"></i></div>
                </a> 
                <a className='icon-home' href={"https://drive.google.com/file/d/1MXNuS4uq-M7ummvUpk-ChDiU4IymQBCD/view?usp=sharing"} target="_blank" rel="noopener noreferrer">
                    <div className='icon'><i class="far fa-file fa-2x"></i></div>
                </a>
        </div>
        <div className="sub-text bottom-left">
          <span className="quotes">&#8220;</span>
            {subText}
          <span className="quotes">&#8220;</span>
        </div>
    </div>
  );
};

export default Home;
