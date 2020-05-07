import React from 'react';
import { HashRouter, Route } from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Download from "./routes/Download";
import Like from "./routes/Like";
import Navigation from "./components/Navigation";
import "./default.css";

function App(){
  return (
  <HashRouter>
    <Navigation />
    <Route path="/" exact={true} component={Home}/>
    <Route path="/Download" component={Download}/>
    <Route path="/Like" component={Like}/>
    <Route path="/About" component={About}/>
  </HashRouter>
  );
}

export default App;