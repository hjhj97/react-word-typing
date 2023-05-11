import axios from "axios";

export function getWord() {
  return axios.get("https://random-word-api.herokuapp.com/word");
}
export function getDict(word: string) {
  return axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
}
