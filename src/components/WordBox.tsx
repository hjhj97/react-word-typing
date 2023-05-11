import React from "react";

function WordBox({ word, dict }: any) {
  console.log(word);
  console.log(dict);
  return (
    <div>
      <h1>{word}</h1>
      <p>{dict}</p>
    </div>
  );
}

export default WordBox;
