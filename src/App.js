import "./App.css";

import Person from "./components/Person";
function App() {
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

export default App;
