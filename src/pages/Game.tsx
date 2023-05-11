/** @jsxImportSource @emotion/react */

import React, { useState } from "react";
import { useQuery } from "react-query";
import { getDict, getWord } from "../api/word";
import WordBox from "../components/WordBox";
import WordInput from "../components/WordInput";
import WordHistory from "../components/WordHistory";
import { useSetRecoilState } from "recoil";
import { wordState } from "../state/atom";
import { css } from "@emotion/react";

const TitleStyle = css`
  position: fixed;
  top: 0;
  width: 100%;
  padding-bottom: 1rem;
  text-align: center;
  border-bottom: 1px solid #ccc;
  font-size: 1.6rem;
  color: skyblue;
`;

const Container = css`
  display: flex;
  margin: 4rem auto;
  width: 400px;
`;

const WordWrapper = css`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function Title() {
  return <h1 css={TitleStyle}>Word Typing</h1>;
}

function Game() {
  const {
    data: res,
    isLoading,
    refetch,
  } = useQuery<any>(["word"], getWord, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  let isWordLoaded = res?.data;

  const {
    data: dict,
    isLoading: isDictLoading,
    isError,
  } = useQuery<any>(
    ["getDict"],
    () => {
      return getDictCb();
    },
    { enabled: !!isWordLoaded, retry: 0, refetchOnWindowFocus: false }
  );

  const getDictCb = () => {
    return getDict(res.data[0]);
  };

  const [state, setState] = useState("PENDING");
  const setWordHistory = useSetRecoilState(wordState);

  const onCheckWord = async (input: string) => {
    if (res.data[0] === input) {
      alert("correct");
      setState("CORRECT");
      setWordHistory((prev: string[]) => [...prev, input]);

      await refetch();
      setState("PENDING");
    } else {
      alert("wrong");
      setState("INCORRECT");
    }
  };

  return (
    <div css={Container}>
      {isLoading && isDictLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div css={WordWrapper}>
          <Title />
          <h5>{state}</h5>
          <WordBox word={res?.data} />
          {isError ? <p>Meanging Not Found</p> : <p>{dict?.data[0]?.meanings[0].definitions[0].definition}</p>}
          <WordInput onCheckWord={onCheckWord} state={state} />
          <WordHistory />
        </div>
      )}
    </div>
  );
}

export default Game;
