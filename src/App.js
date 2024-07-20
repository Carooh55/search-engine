import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project is coded by{" "}
          <a href="https://github.com/Carooh55" target="blank">
            Makhadzi Ramadi
          </a>{" "}
          and is{" "}
          <a href="https://github.com/Carooh55/search-engine" target="blank">
            open-sourced on GitHub.
          </a>
        </footer>
      </div>
    </div>
  );
}
