import "./App.scss";
import { BrowserRouter as Router} from "react-router-dom";
import Header from "./pages/header/header.component";
import Container from "./pages/container/container.component";

function App() {
  return (
    <Router>
          <Container/>
          <Header/>
    </Router>
  );
}

export default App;
