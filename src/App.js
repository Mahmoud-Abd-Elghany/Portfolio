import "./App.scss";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./pages/header/header.component";
import Container from "./pages/container/container.component";
import React, { useEffect } from "react";

function App() {
  
  useEffect(() => {
  }, []);

  return (
    <Router>
      <div className ='App'>
            <Header/>
            <Container/>
            {/* <div className="contribute">Photo by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/s/photos/abstract?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></div> */}
      </div>
    </Router>
  );
}

export default App;
