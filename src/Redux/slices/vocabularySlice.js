import { createSlice } from "@reduxjs/toolkit";

const loadSaveWordFromLocalStorage = () => {
  const saved = localStorage.getItem("words");
  return saved ? JSON.parse(saved) : [];
};

const saveWordsInLocalStorage = (words) => {
  localStorage.setItem("words", JSON.stringify(words));
};

const initialState = {
  words: loadSaveWordFromLocalStorage(),
};

const vocabularySlice = createSlice({
  name: "vocabulary",
  initialState,
  reducers: {
    addWord: (state, action) => {
      console.log(action.payload);
      state.words.push(action.payload);
      saveWordsInLocalStorage(state.words);
    },
    deleteWord: (state, action) => {
      console.log(action.payload);
      state.words = state.words.filter((item) => item.id !== action.payload);
      saveWordsInLocalStorage(state.words);
    },
    updateWord: (state, action) => {
      const { id, word, translation, meaning } = action.payload;

      const wordToUpdate = state.words.find((worD) => worD.id === Number(id));
      if (wordToUpdate) {
        wordToUpdate.word = word;
        wordToUpdate.translation = translation;
        wordToUpdate.meaning = meaning;

        saveWordsInLocalStorage(state.words);
      }
    },
    markAsLearned: (state, action) => {
      const id = action.payload;
      const word = state.words.find((word) => word.id === id);
      console.log(word);
      if (word) {
        word.learned = !word.learned;
        saveWordsInLocalStorage(state.words);
      }
    },
  },
});

export const { addWord, deleteWord, updateWord,markAsLearned } = vocabularySlice.actions;
export default vocabularySlice.reducer;
