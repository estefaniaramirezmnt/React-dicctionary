import React, { useState } from "react";
import "../styles/Dictionary.css";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");

  const search = (e) => {
    e.preventDefault();
    alert(`Searching for "${keyWord}"`);
  };

  const handleKeyWordChange = (e) => {
    setKeyWord(e.target.value);
  }

  return (
    <div className="dictionary-container">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange}/>
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default Dictionary;