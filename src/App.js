import "./App.css";
import React, { Component } from "react";

import Person from "./components/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Hello React</h3>
        <Person name="Saikot" age="30"></Person>
        <Person name="Sagor" age="26"></Person>
        <Person name="Shawon" age="23"></Person>
        <Person name="Abir" age="27"></Person>
      </div>
    );
  }
}

export default App;
