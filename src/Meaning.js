import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  // console.log(props.meaning);
  return (
    <div className="Meaning">
      <section>
        <h3>{props.meaning.partOfSpeech}</h3>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <div key={index}>
              <strong>Definition:</strong> {definition.definition}
              <br />
              <strong>Example:</strong> <em>{definition.example}</em>
              <br />
              <Synonyms synonym={definition.synonyms} />
            </div>
          );
        })}
      </section>
    </div>
  );
}
