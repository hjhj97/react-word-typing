import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { wordState } from "../state/atom";

function WordHistory() {
  const wordHistory = useRecoilValue(wordState);
  return (
    <ul>
      {wordHistory.map((word: string) => (
        <li>{word}</li>
      ))}
    </ul>
  );
}

export default WordHistory;
