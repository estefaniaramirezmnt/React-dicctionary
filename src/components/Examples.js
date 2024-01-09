import React from "react";

const Examples = (props) => {
    if (props.example) {
        return (
        <div className="examples-container">
            <p><strong>Examples: </strong><em>{props.example}</em></p>
        </div>
        );
    }

    return null;
}

export default Examples;