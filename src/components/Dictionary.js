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
          <h1 class=" typed">DICTIONARY</h1>
        </div>
      </div>
      <section className="form-container">
        <form onSubmit={search} className="search-form">
          <input
            type="search"
            onChange={handleKeyWordChange}
            placeholder="Type a word..."
            autoFocus={true}
            className="search-type"
          />
          <input 
            type="submit" 
            value="🔍" 
            className="search-button" 
          />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
};

export default Dictionary;
