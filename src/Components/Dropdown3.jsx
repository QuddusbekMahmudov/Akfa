import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown3 = () => {
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
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <Link to={'/BalkonVaLojiklar'} className="dropdown-toggle opacity-70 flex items-center justify-between" onClick={() => handleItemClick("Option 7")}>
              <span className='mr-4 hover:text-[#63b700] transition-all duration-300'>
              Балконы и лоджии
              </span>
              <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              viewBox="0 0 21 11"
            >
              <path d="M0 2.737L10.5 11 21 2.737 17.57 0 10.5 5.564 3.43 0z" fillRule="evenodd"></path>
            </svg>
            </Link>
          
            {isOpen && (
                <ul className="dropdown-menu absolute top-full left-[-20px] bg-white shadow-md z-1000 list-none p-0 m-0 w-[300px]">
                <li className='border-2'>
                    <Link className=' w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer' to="/YagonaPanjaraliOyna3" onClick={() => handleItemClick("Option 1")}>Одностворчатое окно</Link >
                </li>
                <li className=' border-x-2' >
                    <Link className=' w-[300px]  opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer'  to={'/IkkiQavatliOyna3'}  onClick={() => handleItemClick("Option 2")}>Двухстворчатое окно</Link>
                </li>
                <li className=' border-2'>
                <Link className=' w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer'to={'/UchOsilganDeraza3'} onClick={() => handleItemClick("Option 3")}>Трехстворчатое окно</Link>
                </li>
                <li className='border-x-2' >
                <Link className=' w-[300px]  opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer' to={'/DerazaBilan3'} onClick={() => handleItemClick("Option 4")}>Окна с форточкой</Link>
                </li>
                <li className=' border-2' >
                <Link className='w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer' to={'/EgriOynalar3'}  onClick={() => handleItemClick("Option 5")}>Фигурные окна</Link>
                </li>
                <li className='border-x-2 border-b-2 '>
                <Link className=' w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer' to={'/PremiumOynalar3'}  onClick={() => handleItemClick("Option 6")} >Окна премиум-класса</Link>
                </li>
                </ul>
            )}
        </div>
    );
};

export default Dropdown3;
