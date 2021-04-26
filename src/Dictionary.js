import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Button from "react-bootstrap/Button";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
          <div className="col-3">
            <Button variant="success" className="btnprimary">
              Search
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
