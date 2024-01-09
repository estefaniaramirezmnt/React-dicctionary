import React from "react";
import Meaning from "./Meaning";

const Results = (props) => {
  if (props.results) {

    return (
      <div className="results-container">
        <h2>{props.results.word}</h2><span className="phonetics">{props.results.phonetic}</span>
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
