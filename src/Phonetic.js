import React from "react";
import "./Phonetic.css";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <ReactAudioPlayer
        src={props.phonetic.audio}
        controls
        volume={0.6}
        className="audio"
      />

      <small>{props.phonetic.text}</small>
    </div>
  );
}
