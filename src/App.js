import React, { Component } from "react";
import Episodes from "./Episodes";
import "./App.css";
import Heading from "./Heading";

class App extends Component {
  render() {
    return (
      <div>
        <Heading />
        <Episodes />
      </div>
    );
  }
}

export default App;
