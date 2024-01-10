import React from "react";
import Meaning from "./Meaning";
import "../styles/Results.css";

const Results = (props) => {
  if (props.results) {
    return (
      <div className="results-container">
        <div className="searched-word">
          <h2>{props.results.word}<span className="phonetics">/{props.results.phonetic}/</span></h2>
          
        </div>
        {props.results.meanings.map((meaning, index) => {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
