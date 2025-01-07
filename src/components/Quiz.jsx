import React, { useState } from "react";
import { useSelector } from "react-redux";

const Quiz = () => {
  const { words } = useSelector((store) => store.vocabulary);
  const darkMode = useSelector((store) => store.darkMode.enabled);
  const [score, setScore] = useState(0);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  if (words.length < 4) return <p className="mt-20 text-center md:text-3xl text-2xl ">Add at least 4 words to start the quiz.</p>;

  const handleAnswer = (isCorrect) => {
    if (isCorrect) setScore((prevScore) => prevScore + 1);

    if (questionIndex + 1 === words.length) {
      setIsQuizFinished(true);
    } else {
      setQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  if (isQuizFinished) {
    return (
      <div className={`p-4 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
        <h2 className="text-2xl font-bold mb-4">Quiz Finished!</h2>
        <p className="text-xl">
          Your score: <span className="font-bold">{score}</span> out of <span className="font-bold">{words.length}</span>
        </p>
        <button
          className={`mt-4 px-4 py-2 rounded ${darkMode ? "bg-gray-700 text-white" : "bg-gray-300 text-black"
            }`}
          onClick={() => {
            setScore(0);
            setQuestionIndex(0);
            setIsQuizFinished(false);
          }}
        >
          Restart Quiz
        </button>
      </div>
    );
  }

  const currentWord = words[questionIndex];
  const options = [...words]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .concat(currentWord)
    .sort(() => Math.random() - 0.5);

  return (
    <div className={`p-4 mt-20 ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <h2 className="text-xl font-semibold mb-2">Quiz</h2>
      <p className="mb-4">Question {questionIndex + 1} of {words.length}</p>
      <p className="mb-4">What is the translation for: <span className="font-bold">{currentWord.word}</span>?</p>
      <div className="space-y-2">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswer(option.translation === currentWord.translation)}
            className={`block ${darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"} px-4 py-2 rounded w-full`}
          >
            {option.translation}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Quiz;