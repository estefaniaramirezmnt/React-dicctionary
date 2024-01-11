import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
// import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/Dictionary.css";

const Dictionary = () => {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  // function handleDictionaryResponse(response) {
  //   if (response.data.word === undefined) {
  //     alert("We cannot find that word! Sorry! 😟");
  //     return null;
  //   } else {
  //     setResults(response.data);
  //     setLoaded(true);
  //   }
  // }
  const handleDictionaryResponse = (response) => {
    setResults(response.data);
      //   if (response.data.word === undefined) {
  //     alert("We cannot find that word! Sorry! 😟");
  //     return null;
  //   } else {
  //     setResults(response.data);
  };

  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);  
  };

  const search = (e) => {
    e.preventDefault();
    const apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey =
      "OwXO0PG5GnuEB3PXMCbam3BJK5EcC67jxGjja8t4RxHENwp9ataHreFY";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  };

  const handleKeyWordChange = (e) => {
    setKeyWord(e.target.value);
  };

  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

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
          <button type="submit" className="search-button btn btn-secondary">
            {searchIcon}
          </button>
        </form>
      </section>
      <Results results={results} photos={photos} />
      {/* <Photos photos={photos} /> */}
    </div>
  );
};

export default Dictionary;
