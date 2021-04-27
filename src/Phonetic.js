import React from "react";
import "./Phonetic.css";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <a href={props.phonetic.audio} target="_blank">
        Listen
      </a>
      <small>{props.phonetic.text}</small>
    </div>
  );
}
