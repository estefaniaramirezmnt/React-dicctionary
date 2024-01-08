import React, { useState } from "react";
import axios from "axios";
import "../styles/Dictionary.css";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");

  const handleResponse = (response) => {
    console.log(response.data[0]);
  }

  const search = (e) => {
    e.preventDefault();
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyWord}`;
    axios.get(apiUrl).then(handleResponse);
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