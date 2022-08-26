import React from "react";
//css
import "./App.css";
import Intro from "./Components/Intro/Intro";
//Components
import Navbar from "./Components/Navbar/Navbar";
import Services from "./Components/Services/Services";
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Services />
    </div>
  );
};

export default App;
