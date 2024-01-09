import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "../styles/Dictionary.css";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);

  const handleResponse = (response) => {
    setResults(response.data);
  };

  const search = (e) => {
    e.preventDefault();
    const apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  };

  const handleKeyWordChange = (e) => {
    setKeyWord(e.target.value);
  };

  return (
    <div className="dictionary-container">
      <div class="container-h1">
        <div class="typewriter">
          <h1 class=" typed">Dictionary</h1>
        </div>
      </div>
      <form onSubmit={search}>
        <input type="search" onChange={handleKeyWordChange} />
        <input type="submit" value="Search" />
        <Results results={results} />
      </form>
    </div>
  );
};

export default Dictionary;
