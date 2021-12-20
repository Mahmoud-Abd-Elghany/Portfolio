import "./App.scss";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./pages/header/header.component";
import Container from "./pages/container/container.component";
import { useState } from "react";

function App() {
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const {x, y} = mousePosition;
  const mouseMoveHandler = (e) => {
    console.log('X:', e.nativeEvent.offsetX,'Y:', e.nativeEvent.offsetY);
    setMousePosition({x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY});
  }
  return (
    <Router>
      <div className ='App' onMouseMove={mouseMoveHandler}>
            <Container/>
            <Header/>
            <div className="sticky-1" style = {{transform: `translate(${x/100}px, ${y/100}px)`}}></div>
            <div className="sticky-2" style = {{transform: `translate(${-(x/110)}px, ${y/110}px)`}}></div>
      </div>
    </Router>
  );
}

export default App;
