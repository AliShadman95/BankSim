import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from "./Components/Main";
import LoggedIn from "./Components/LoggedIn";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={LoggedIn} />
        <Route path="/login" component={LoggedIn} />
      </Router>
    </div>
  );
}

export default App;
