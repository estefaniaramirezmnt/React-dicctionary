import React from "react";

const Synonyms = (props) => {
    if (props.synonyms) {
        const limitedSynonyms = props.synonyms.slice(0, 4);
        return (
        <div className="synonyms-container">
            <strong>Synonyms:</strong>
            <ul>
                {limitedSynonyms.map((synonym, index) => {
                    return <li key={index}>{synonym}</li>;
                })}
            </ul>
        </div>
        );
    }

    return null;
}

export default Synonyms;