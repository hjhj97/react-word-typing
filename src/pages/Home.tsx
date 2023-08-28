/** @jsxImportSource @emotion/react */

import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const LinkStyle = css`
  text-align: center;
  text-decoration: none;
  color: skyblue;
`;

function Home() {
  return (
    <Link css={LinkStyle} to="/game">
      <h1>Start Game</h1>
    </Link>
  );
}

export default Home;
