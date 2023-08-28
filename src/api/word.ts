import axios from "axios";

export async function getWord() {
  try {
    const res = await axios.get("https://random-word-api.herokuapp.com/word");
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
export async function getDict(word: string) {
  try {
    const res = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
