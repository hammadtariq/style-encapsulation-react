import React, { Component } from "react";
import "./App.css";

import HybridDemo from "./components/HybridDemo";
import StyledComponentDemo1 from "./components/StyledComponentDemo1";
import StyledComponentDemo2 from "./components/StyledComponentDemo2";

class App extends Component {
  render() {
    return (
      <div className="App">
        <HybridDemo />
        {/* <StyledComponentDemo1 /> */}
        {/* <StyledComponentDemo2 /> */}
      </div>
    );
  }
}

export default App;
