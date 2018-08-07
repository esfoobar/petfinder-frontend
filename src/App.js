import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./nav/components/Navbar"
import Home from "./home/components/Home"
import About from "./about/components/About"
import Topics from "./topics/components/Topics"

const App = () => (
  <Router>
    <div>

      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />

    </div>
  </Router>
);

export default App
