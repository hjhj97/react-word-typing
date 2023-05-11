import React from "react";

function WordBox({ word, dict }: any) {
  console.log(word);
  console.log(dict);
  return (
    <div>
      <h2>{word}</h2>
      <p>{dict}</p>
    </div>
  );
}

export default WordBox;
