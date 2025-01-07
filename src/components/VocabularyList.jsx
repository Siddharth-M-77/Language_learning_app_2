import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteWord } from "../Redux/slices/vocabularySlice";
import { Link } from "react-router-dom";

const VocabularyList = () => {
    const dispatch = useDispatch()

    const { words } = useSelector((store) => store.vocabulary);
    const darkMode = useSelector((store) => store.darkMode.enabled);

    const handleDelete = (id) => {
        dispatch(deleteWord(id))
    }

    return (
        <div
            className={`w-full min-h-full ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
                } mt-10 flex flex-col items-center justify-center gap-5`}
        >
            {words?.map((word, index) => {
                return (
                    <div
                        key={index}
                        className={`md:w-[60%] w-full flex flex-col md:flex-row justify-between items-center shadow-2xl rounded-2xl p-4 border-2 ${darkMode ? "border-white" : "border-black"
                            }`}
                    >
                        {/* Word Details Section */}
                        <div className="md:w-[30%] w-full mb-4 md:mb-0 text-center md:text-left">
                            <h4 className="text-lg font-bold mb-2">{word.word}-{word.translation}</h4>

                            <h4 className="text-base">({word.meaning})</h4>
                        </div>

                        {/* Buttons Section */}
                        <div className="md:w-[50%]   w-full flex flex-col md:flex-row justify-center md:justify-end items-center gap-4">
                            <Link to={`/edit/${word.id}`}
                                className={`w-full md:w-auto  font-bold ${darkMode
                                    ? "bg-gray-700 text-white hover:bg-gray-600"
                                    : "bg-gray-200 text-black hover:bg-gray-300"
                                    } px-4 py-2 rounded-lg text-md`}
                            >
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(word.id)}
                                className={`w-full md:w-auto font-bold ${darkMode
                                    ? "bg-red-700 text-white hover:bg-red-600"
                                    : "bg-red-200 text-black hover:bg-red-300"
                                    } px-4 py-2 rounded-lg text-md`}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default VocabularyList;
