/** @jsxImportSource @emotion/react */

import React, { useEffect, useMemo, useState } from "react";
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

interface Dictionary {
  data: {
    meanings: {
      definitions: {
        definition: string;
      }[];
    }[];
  }[];
}

export type AnswerStatus = "PENDING" | "CORRECT" | "INCORRECT";

function Title() {
  return <h1 css={TitleStyle}>Word Typing</h1>;
}

function Game() {
  const [dict, setDict] = useState<Dictionary | undefined>(undefined);
  const [state, setState] = useState<AnswerStatus>("PENDING");
  const setWordHistory = useSetRecoilState(wordState);

  const {
    data: wordRes,
    isLoading,
    refetch,
  } = useQuery<{ data: string[] }>(["word"], getWord, {
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  const wordMeaning = useMemo(() => dict?.data[0].meanings[0].definitions[0].definition ?? "", [dict]);

  useEffect(() => {
    if (wordRes?.data) {
      getDict(wordRes.data[0])
        .then((res) => setDict(res))
        .catch((error) => setDict(undefined));
    }
  }, [wordRes]);

  const onCheckWord = async (input: string) => {
    if (wordRes === undefined) return;
    if (wordRes.data[0] === input) {
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
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div css={WordWrapper}>
          <Title />
          <h5>{state}</h5>
          <WordBox word={wordRes?.data[0] ?? ""} />
          <p>{wordMeaning}</p>
          <WordInput onCheckWord={onCheckWord} state={state} />
          <WordHistory />
        </div>
      )}
    </div>
  );
}

export default Game;
