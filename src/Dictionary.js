import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <h3>What word do you want to look up?</h3>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                className="keyword-input"
                onChange={handleKeywordChange}
              />
            </div>
          </div>
        </form>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    search();
  }
}
