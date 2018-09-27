import React, { Component } from "react";
import "./App.css";
import HybridDemo from "./components/HybridDemo";
import StyledComponentDemo from "./components/StyledComponentDemo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HybridDemo />
        {/* <StyledComponentDemo /> */}
      </div>
    );
  }
}

export default App;
