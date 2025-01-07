import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../Redux/slices/darkModeSlice';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const darkMode = useSelector((store) => store.darkMode.enabled);
    const [menuOpen, setMenuOpen] = useState(false);

    const handleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    const handleNavigate = () => {
        navigate('/');
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    return (
        <div
            className={`h-20 px-5 w-full border-b-2 border-gray-200 ${
                darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'
            } flex items-center justify-between`}
        >
            <h1
                onClick={handleNavigate}
                className="cursor-pointer text-2xl md:text-3xl font-extrabold"
            >
                <i class="ri-home-line"></i>
            </h1>

            <button
                className="md:hidden text-2xl z-50" 
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                {menuOpen ? (
                    <i className="ri-close-line"></i> 
                ) : (
                    <i className="ri-menu-line"></i> 
                )}
            </button>

            {/* Navigation Links */}
            <div
                className={`fixed top-0 right-0 h-full bg-inherit z-40 flex flex-col items-start justify-start w-64 transform ${
                    menuOpen ? 'translate-x-0' : 'translate-x-full'
                } transition-transform duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:justify-center md:w-auto md:transform-none`}
            >
                <div className="flex flex-col   md:flex-row gap-6 p-5">
                    <button
                        className="rounded-full dark:hover:bg-gray-200 p-2 transition"
                        onClick={handleDarkMode}
                    >
                        {darkMode ? (
                            <i className="ri-sun-fill text-yellow-400 text-2xl"></i>
                        ) : (
                            <i className="ri-moon-fill text-blue-600 text-2xl"></i>
                        )}
                    </button>

                    {/* Navigation Links */}
                    <Link
                        className={`px-5 py-2 rounded-lg ${
                            darkMode
                                ? 'bg-gray-800 border-2 border-white'
                                : 'bg-white border-black border-2'
                        }`}
                        to={'/quiz'}
                    >
                        Quiz
                    </Link>
                    <Link
                        className={`px-5 py-2 rounded-lg ${
                            darkMode
                                ? 'bg-gray-800 border-2 border-white'
                                : 'bg-white border-black border-2'
                        }`}
                        to={'/flash-card'}
                    >
                        FlashCard
                    </Link>
                    <Link
                        className={`px-5 py-2 rounded-lg ${
                            darkMode
                                ? 'bg-gray-800 border-2 border-white'
                                : 'bg-white border-black border-2'
                        }`}
                        to={'/learned-word'}
                    >
                        Learned Word
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Header;
