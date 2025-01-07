import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addWord, updateWord } from '../Redux/slices/vocabularySlice';
import { useNavigate, useParams } from 'react-router-dom';

const AddWords = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const { words } = useSelector(store => store.vocabulary)
    const editWord = words.find((word) => word.id === Number(id))
    const dispatch = useDispatch()
    const darkMode = useSelector((store) => store.darkMode.enabled);
    const [formData, setFormData] = useState({
        word: "",
        translation: "",
        meaning: ""
    })
    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        if (editWord) {
            setFormData({
                word: editWord.word,
                translation: editWord.translation,
                meaning: editWord.meaning
            })
        }
    }, [editWord])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })

    }
    const handleSubmit = (e) => {
        e.preventDefault()
        if (!formData.word || !formData.translation || !formData.meaning) {
            setError("All fields are required");
            return;
        }
        if (editWord) {
            dispatch(updateWord({ id: editWord.id, ...formData }))



        } else {
            const data = {
                id: Date.now(),
                ...formData,
                learned: false
            }
            dispatch(addWord(data))

        }
        setFormData({
            word: "",
            translation: "",
            meaning: ""

        })
    }

    return (
        <div className='  w-full p-10 '>

            <form onSubmit={(e) => handleSubmit(e)} className='flex w-full items-center justify-center gap-6 flex-col'>
                <input value={formData.word} onChange={(e) => handleChange(e)} autoFocus className={`md:w-[70%] w-full rounded-xl p-3 outline-none ${darkMode ? "bg-white text-black" : "bg-gray-800 text-white "} md:text-xl text-lg border-blue-600 border-2`} type="text" name="word" placeholder='Enter your words....' />
                <input value={formData.translation} onChange={(e) => handleChange(e)} autoFocus className={`md:w-[70%] w-full rounded-xl p-3 outline-none ${darkMode ? "bg-white text-black" : "bg-gray-800 text-white "} md:text-xl text-lg border-blue-600 border-2`} type="text" name="translation" placeholder='Enter Their translation....' />
                <input value={formData.meaning} onChange={(e) => handleChange(e)} autoFocus className={`md:w-[70%] w-full rounded-xl p-3 outline-none ${darkMode ? "bg-white text-black" : "bg-gray-800 text-white "} md:text-xl text-lg border-blue-600 border-2`} type="text" name="meaning" placeholder='Enter their meaning....' />

                <button className={`w-full md:w-[20%]  ${darkMode ? "bg-gray-600 text-white border-white border-2" : "bg-white text-black border-black   border-2"} px-4 py-2 rounded-md md:text-xl text-md`}>{editWord ? "Update Word" : "Add Word"}</button>

                {
                    editWord && <button onClick={goBack} className='px-6 mt-10 py-2 bg-gray-700 outline-none rounded-lg '>Go Back </button>
                }

            </form>


        </div>
    )
}

export default AddWords
