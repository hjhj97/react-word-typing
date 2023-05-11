import React, { useState } from "react";
import { useQuery } from "react-query";
import { getDict, getWord } from "../api/word";
import WordBox from "../components/WordBox";
import WordInput from "../components/WordInput";
import WordHistory from "../components/WordHistory";
import { useSetRecoilState } from "recoil";
import { wordState } from "../state/atom";

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
    { enabled: !!isWordLoaded, retry: 0 }
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
    <div>
      {isLoading && isDictLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
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
