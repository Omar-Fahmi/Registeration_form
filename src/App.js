import "./Component/style.css";
import Registration from "./Component/register";
import Login from "./Component/login";
import WelcomePage from "./Component/welcome";
import WelcomeBack from "./Component/welceomLogin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Registration />} />
          <Route path="/welcome" element={<WelcomePage/>}/> 
          <Route path="/login" element={<Login />} />
          <Route path="/welcome-back" element={<WelcomeBack/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
