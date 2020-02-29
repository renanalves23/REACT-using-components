import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

// Create child Statcard component here
function StatCard(label, icon, number) {
  return (
    <div className="stat-card">
      <div className="stat-line">
        <span>{icon}</span>
        <span>{label}</span>
      </div>
      <p>{number}</p>
    </div>
  );
  // define component here
  // define props of icon label and number
}

function App() {
  return (
    <div className="App">
      <h2>Use components and props in React</h2>
      {/* Use child component x4 here */}

      <ScotchInfoBar seriesNumber={4} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
