import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />

        <footer>
          This project is coded by{" "}
          <a
            href="https://github.com/Carooh55"
            target="blank"
            rel="noopener noreferrer"
          >
            Makhadzi Ramadi
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Carooh55/search-engine"
            target="blank"
            rel="noopener noreferrer"
          >
            open-sourced on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://weather-search-enginee.netlify.app/"
            target="blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
