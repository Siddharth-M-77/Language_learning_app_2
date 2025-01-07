import React from 'react'
import Header from './Header'
import AddWords from './AddWords'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Progressbar from './Progressbar'

const Home = () => {
    const darkMode = useSelector(store => store.darkMode.enabled)
    return (
        <div>
            <AddWords />
            <div className="flex items-center justify-center ">
                <Link
                    to={"/vocab-list"}
                    className={`w-full font-bold md:w-[20%] ${darkMode
                        ? "bg-gray-800 border-t border-white text-white"
                        : "bg-white text-black border-b-2 border-black "
                        } px-2 py-2 rounded-3xl md:text-xl text-md text-center`}
                >
                    View All Words
                </Link>
            </div>
            <Progressbar/>

        </div>
    )
}

export default Home
