/** @jsxImportSource @emotion/react */
import React from "react";
import { css } from "@emotion/react";
const wordBoxStyle = css`
  & h1 {
    font-size: 3.5rem;
    color: skyblue;
  }
`;

function WordBox({ word }: { word: string }) {
  return (
    <div css={wordBoxStyle}>
      <h1>{word}</h1>
    </div>
  );
}

export default WordBox;
