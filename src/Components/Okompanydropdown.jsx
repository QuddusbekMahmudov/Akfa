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
    };

    return (
        <div 
            className="dropdown" 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}
            style={{ position: 'relative', display: 'inline-block' }}
        >
            <button className="dropdown-toggle flex items-center justify-between opacity-70 transition-opacity duration-300">
              <span className='mr-4 text-black hover:text-[#63b700] transition-all duration-300'>
              О компании
              </span>
          
            </button>
          
            {isOpen && (
                <ul className="dropdown-menu" style={{
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: -20,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    zIndex: 100,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    width: '300px'
                }}>
                <li className='border-2 hover:text-[#63b700] text-black transition-all duration-300 opacity-70' onClick={() => handleItemClick("Option 1")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                    <Link to="Kamanda">Наша команда</Link>
                </li>
                <li className='border-x-2 hover:text-[#63b700] text-black transition-all duration-300  opacity-70' onClick={() => handleItemClick("Option 2")} style={{ padding: '12px 15px', cursor: 'pointer' }}>
                    <Link to='Bizhaqimizda'>Отзывы о нас</Link>
                </li>
          
                
                </ul>
            )}
        </div>
    );
};

export default Okompanydropdown;
