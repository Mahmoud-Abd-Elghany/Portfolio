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
            <Header/>
            <Container/>
            <div className="contribute">Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div>
  
      </div>
    </Router>
  );
}

export default App;
