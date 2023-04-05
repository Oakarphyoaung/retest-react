import logo from "./logo.svg";
import "./App.css";
import User from "./components/User";
import Content from "./components/Content";
import { useState } from "react";
const allUser = [
  { id: 1, name: "aung myanmar", email: "aung@gmial.com" },
  { id: 2, name: "hsu thel mwe", email: "hsu@gmial.com" },
  { id: 3, name: "chan myae", email: "chan@gmial.com" },
  { id: 4, name: "okar phyo", email: "okar@gmial.com" },
];

function App() {
  // console.log("component rendered...in App");
  const [buss, setBuss] = useState({
    name: "Line 30",
    startStation: "Hle Dan",
    endStation: "Tamwe",
    stations: ["Hle Dan", "Myaynigone", "Mayangone", "Tamwe"],
  });

  return (
    <div
      className="App"
      style={{
        width: "100%",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <header className="App-header">
        <button
          onClick={() => {
            setBuss({ ...buss, name: "Line 40" });
          }}
        >
          Change Buss Name
        </button>
        <ul>
          <li>Bus Name :{buss.name}</li>
          <li>Start Station :{buss.startStation}</li>
          <li>End Station :{buss.endStation}</li>
          <h2>All stations</h2>
          {buss.stations.map((station) => {
            return <li key={Math.random()}>{station}</li>;
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
