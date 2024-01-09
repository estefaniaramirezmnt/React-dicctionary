import React from "react";

const Synonyms = (props) => {
    if (props.synonyms) {
        return (
        <div className="synonyms-container">
            <strong>Synonyms:</strong>
            <ul>
                {props.synonyms.map((synonym, index) => {
                    return <li key={index}>{synonym}</li>;
                })}
            </ul>
        </div>
        );
    }

    return null;
}

export default Synonyms;