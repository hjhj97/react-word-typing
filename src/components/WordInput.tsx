import React, { useEffect } from "react";
import { useForm } from "react-hook-form";

function WordInput({ state, onCheckWord }: any) {
  const { register, handleSubmit, reset } = useForm();
  useEffect(() => {
    reset();
  }, [state]);

  const onSubmit = handleSubmit((data) => {
    onCheckWord(data.word);
  });

  return (
    <form onSubmit={onSubmit}>
      <input type="text" {...register("word", { required: true })} />
      <button type="submit">Enter</button>
    </form>
  );
}

export default WordInput;
