import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  function search(event) {
    if (keyword !== "") {
      event.preventDefault();
      let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
      axios.get(apiUrl).then(handleResponse);
    } else {
      alert("please enter a word");
    }
  }

  function handleKeywordChange(event) {
    event.preventDefault();
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h3>What word do you want to look up?</h3>
      <form onSubmit={search}>
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
}
