import React, { useState } from "react";
import { useQuery } from "react-query";
import { getWord } from "../api/word";
import WordBox from "../components/WordBox";
import WordInput from "../components/WordInput";

function Game() {
  const { data: res, isLoading, refetch } = useQuery<any>(["word"], getWord, { staleTime: 60 * 1000 });
  const [state, setState] = useState("PENDING");

  const onCheckWord = async (input: string) => {
    if (res.data[0] === input) {
      alert("correct");
      setState("CORRECT");
      await refetch();
      setState("PENDING");
    } else {
      alert("wrong");
      setState("INCORRECT");
    }
  };

  return (
    <div>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <h2>{state}</h2>
          <WordBox word={res.data} />
          <WordInput onCheckWord={onCheckWord} state={state} />
        </div>
      )}
    </div>
  );
}

export default Game;
