import React from "react";

const Meaning = (props) => {
    console.log(props.meaning);
  return (
    <div className="meaning-container">
        <h3>{props.meaning.partOfSpeech}</h3>
        <p>{props.meaning.definition}</p>
        <p><em>{props.meaning.example}</em></p>
    </div>
  );
};

export default Meaning;
