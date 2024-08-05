import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Okompanydropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const handleItemClick = (item) => {
        console.log(`Selected item: ${item}`);
        setIsOpen(false); // Dropdownni yopish
    };

    return (
        <div
            className="dropdown relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <button className="dropdown-toggle flex items-center justify-between opacity-70 transition-opacity duration-300" onClick={() => handleItemClick("Option 7")}>
                <span className='mr-4 text-black hover:text-[#63b700] transition-all duration-300'>
                    О компании
                </span>
            </button>

            {isOpen && (
                <ul className="dropdown-menu absolute top-full left-[-20px] bg-white shadow-md z-50 list-none p-0 m-0 w-[300px]">
                    <li className='border-2'>
                        <Link
                            className='w-full inline-block opacity-70 text-black hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer'
                            to="/Kamanda"
                            onClick={() => handleItemClick("Option 1")}
                        >
                            Наша команда
                        </Link>
                    </li>
                    <li className='border-x-2'>
                        <Link
                            className='w-full opacity-70 text-black hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer'
                            to="/Bizhaqimizda"
                            onClick={() => handleItemClick("Option 2")}
                        >
                            Отзывы о нас
                        </Link>
                    </li>
                </ul>
            )}
        </div>
    );
};

export default Okompanydropdown;
