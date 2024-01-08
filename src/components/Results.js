import React from "react";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {
    console.log(props.results)
    console.log(props.results.meanings);
    return (
      <div className="results-container">
        <h2>{props.results.word}</h2>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
                <Meaning meaning={meaning} />
            </div>
          );
        })}
        
      </div>
    );
  } else {
    return null;
  }
};

export default Results;
