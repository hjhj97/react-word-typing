import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { wordState } from "../state/atom";

function WordHistory() {
  const [wordHistory, setWordHistory] = useRecoilState(wordState);
  return (
    <ul>
      {wordHistory.length > 0 && (
        <button
          onClick={() => {
            setWordHistory([]);
          }}
        >
          Reset
        </button>
      )}
      {wordHistory.map((word: string) => (
        <li>{word}</li>
      ))}
    </ul>
  );
}

export default WordHistory;
