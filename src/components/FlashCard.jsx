import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { markAsLearned } from '../Redux/slices/vocabularySlice'

const FlashCard = () => {
    const dispatch = useDispatch()
    const { words } = useSelector(store => store.vocabulary)
    const darkMode = useSelector(store => store.darkMode.enabled)
    const [index, setIndex] = useState(0)
    const [flip, setFlip] = useState(false)

    const handleFlip = () => {
        setFlip((prev) => !prev)
    }
    const handleNext = () => {
        setIndex((prevIndex) => (prevIndex + 1) % words.length)
        setFlip(false)
    }
    const handleMarkAsLearned = (id) => {
        dispatch(markAsLearned(id))
    }
    if (words.length === 0) return <p>Add Word to view flashCard</p>
    const currentWord = words[index];

    if (!currentWord) return <p>No Valid word available</p>
    return (
        <div className={`flex flex-col gap-10 items-center ${darkMode ? "bg-gray-800" : "bg-white "} justify-center w-full h-full `}>

            <h2 className='text-center md:text-4xl  mt-6 text-2xl'>FlashCard</h2>

            <div onClick={handleFlip} className={`lg:h-72 shadow-2xl lg:w-72 w-60 h-60 flex items-center justify-center  rounded-3xl ${darkMode ? "bg-gray-800 text-white border-white border-2" : "bg-white text-black border-black border-2"} `}>
                <h2 className='lg:text-2xl text-center text-xl'>{flip ? "Translation" : "Word"}: <br />{flip ? currentWord.translation : currentWord.word}</h2>
            </div>

            <div className='flex items-center justify-center gap-5'>
                <button onClick={handleNext} className='lg:text-xl text-lg px-6 py-2 rounded-md outline-none bg-blue-500 text-white  font-semibold'>Next</button>
                <button onClick={() => handleMarkAsLearned(currentWord.id)} className='md:text-xl text-lg px-6 py-2 rounded-md outline-none  bg-green-500 text-white font-semibold'>{currentWord.learned ? "Marked" : "Mark as Learned"}</button>
            </div>

        </div>
    )
}

export default FlashCard
