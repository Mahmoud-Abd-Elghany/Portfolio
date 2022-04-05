import "./App.scss";
import { useLocation } from "react-router-dom";
import Header from "./pages/header/header.component";
import Container from "./pages/container/container.component";
import React, { useEffect, useState } from "react";
import {CSSTransition, TransitionGroup } from "react-transition-group";
import ToLetters from "./components/toLetter/toLetter.component";

function App() {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  useEffect(() => {
    setPath(changePath(location.pathname));
  }, [location.pathname])

  const changePath = (path) => {
    switch (path){
      case '/':
        return "Home";
      default:
        return path.slice(1);
    }
  }
  return (
      <div className ='App'>
      <TransitionGroup>
                <CSSTransition
                    key = {location.key}
                    appear ={true}
                    timeout={800}
                    classNames="text"
                    >
            <ToLetters className="background-text">
              {path}
            </ToLetters>
        </CSSTransition>
      </TransitionGroup>
            <Header/>
            <Container/>
      </div>
  );
}

export default App;
