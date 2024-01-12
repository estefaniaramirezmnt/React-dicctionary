import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../styles/Dictionary.css";

const Dictionary = (props) => {
  const [keyWord, setKeyWord] = useState(props.defaultKeyWord);
  const [loaded, setLoaded] = useState(false);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);
  const [value, setValue] = useState("");

  const handlePexelsResponse = (response) => {
    setPhotos(response.data.photos);
  };

  const handleDictionaryResponse = (response) => {
    setResults(response.data);

    let pexelsApiKey =
      "OwXO0PG5GnuEB3PXMCbam3BJK5EcC67jxGjja8t4RxHENwp9ataHreFY";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyWord}&per_page=6`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
  };

  const load = () => {
    setLoaded(true);
    search();
  }

  const search = () => {
    const apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios
      .get(apiUrl)
      .then(handleDictionaryResponse)
      .catch((error) => {
        if (error.response.status === 500) {
          alert("Sorry, something went wrong. Check if you have entered a valid word or try again later.");
        }});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    search();
    setValue("");
  }

  const handleKeyWordChange = (e) => {
    setKeyWord(e.target.value);
    setValue(e.target.value);
  };

  const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;

  if (loaded) {
  return (
    <div className="dictionary-container">
      <div class="container-h1">
        <div class="typewriter">
          <h1 class=" typed">DICTIONARY</h1>
        </div>
      </div>
      <section className="form-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="search"
            onChange={handleKeyWordChange}
            value={value}
            placeholder="Type a word to search..."
            autoFocus={true}
            className="search-type"
          />
          <button type="submit" className="search-button btn btn-secondary">
            {searchIcon}
          </button>
        </form>
      </section>
      <Results results={results} photos={photos} />
      <Photos photos={photos} />
    </div>
  );
  } else {
    load();
    return "Loading...";
  }
};

export default Dictionary;
