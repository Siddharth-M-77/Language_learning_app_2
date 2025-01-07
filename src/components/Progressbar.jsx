import React from 'react'
import { useSelector } from 'react-redux'

const Progressbar = () => {
    const { words } = useSelector(store => store.vocabulary)
    const totalWords = words.length
    const learnedWord = words.filter((word) => word.learned === true).length

    const progressBar = totalWords > 0 ? Math.round((learnedWord / totalWords) * 100) : 0


    return (
        <div>

            <div className="w-full md:w-[70%] mx-auto mb-6 mt-5 p-2">
                <div className="flex justify-between items-center mb-2">
                    <p>Total Words: {totalWords}</p>
                    <p>Learned Words: {learnedWord}</p>
                </div>
                <div className="w-full bg-gray-300 rounded h-4">
                    <div
                        className="bg-green-500 h-4 rounded"
                        style={{ width: `${progressBar}%` }}
                    ></div>
                </div>
                <p className="text-center mt-2">{progressBar}% Learned</p>
            </div>

        </div>
    )
}

export default Progressbar
