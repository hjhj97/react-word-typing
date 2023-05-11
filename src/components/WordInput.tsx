/** @jsxImportSource @emotion/react */

import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { css } from "@emotion/react";

const formStyle = css`
  & div {
    display: flex;
    gap: 1rem;

    input {
      border: none;
      background-color: #eee;
      height: 3rem;
      min-width: 16rem;
      border-radius: 5rem;
      padding: 0 2rem;
      font-size: 1.4rem;
      color: skyblue;
    }
    button {
      border: none;
      background-color: #eee;
      padding: 0 1.5rem;
      border-radius: 1.5rem;
    }
  }
`;

function WordInput({ state, onCheckWord }: any) {
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    reset();
  }, [state]);

  const onSubmit = handleSubmit((data) => {
    onCheckWord(data.word);
  });

  return (
    <form onSubmit={onSubmit} css={formStyle}>
      <div>
        <input type="text" {...register("word", { required: true })} />
        <button type="submit">Enter</button>
      </div>
    </form>
  );
}

export default WordInput;
