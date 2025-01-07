import React from "react";
import AddWords from "./components/AddWords";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import VocabularyList from "./components/VocabularyList";
import Quiz from "./components/Quiz";
import FlashCard from "./components/FlashCard";
import LearnedWord from "./components/LearnedWord";

function App() {
  const darkMode = useSelector(store => store.darkMode.enabled)
  return (
    <div className={`flex  flex-col   min-h-screen w-screen ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"} `}>
      <Header />
      {/* let newIndex = index;
        do {
            newIndex = (newIndex + 1) % words.length
        } */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vocab-list" element={<VocabularyList />} />
        <Route path="/edit/:id" element={<AddWords />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/flash-card" element={<FlashCard />} />
        <Route path="//learned-word" element={<LearnedWord />} />

      </Routes>
    </div>
  );
}

export default App;
