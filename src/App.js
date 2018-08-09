import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./header/components/Header"
import Home from "./home/components/Home"
import About from "./about/components/About"
import Topics from "./topics/components/Topics"
import Topic from "./topics/components/Topic"

const App = () => (
  <Router>
    <div>

      <Header />

      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/topics" component={Topics} />
      <Route path="/topics/:topicId" component={Topic} />

    </div>
  </Router>
);

export default App
