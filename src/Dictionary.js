import React, { useState } from "react";
import "./Dictionary.css";
import Button from "react-bootstrap/Button";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`searching for ${keyword} definition`);
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
