/** @jsxImportSource @emotion/react */

import React from "react";
import { useRecoilState } from "recoil";
import { wordState } from "../state/atom";
import { css } from "@emotion/react";

const historyStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & button {
    border: none;
    background-color: #eee;
    padding: 1rem 1.5rem;
    border-radius: 1.5rem;
    margin: 1rem 0;
    :hover {
      cursor: pointer;
      background-color: skyblue;
      color: white;
      transition: background 0.2s;
    }
  }
  & li {
    padding: 1rem;
    width: 16rem;
    background-color: skyblue;
    text-align: center;
    color: white;
    border-radius: 2rem;
    list-style: none;
    font-weight: bold;
    font-size: 1.5rem;
    margin: 0.7rem 0;
  }
`;

function WordHistory() {
  const [wordHistory, setWordHistory] = useRecoilState(wordState);
  return (
    <ul css={historyStyle}>
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
        <li key={word}>{word}</li>
      ))}
    </ul>
  );
}

export default WordHistory;
