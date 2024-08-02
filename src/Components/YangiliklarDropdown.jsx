import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const YangiliklarDropdown = () => {

    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleItemClick = (item) => {
        console.log(`Selected item: ${item}`);
        setIsOpen(false); // Close the dropdown after selecting an item
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleEscape = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscape);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscape);
        };
    }, []);

    return (
        <div 
            className="dropdown"
            style={{ position: 'relative', display: 'inline-block' }}
            ref={dropdownRef}
        >
            <button
                className="inline-flex items-center justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-blue-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                style={{ display: 'flex', alignItems: 'center' }}
                onClick={handleToggle}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    className="w-5 h-5 mr-2"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
                <span className='text-blue-700'>Разделы</span>
            </button>
          
            {isOpen && (
                <ul className="dropdown-menu" style={{
                    display: 'block',
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.15)',
                    zIndex: 1000,
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    width: '280px'
                }}>
                    
                    <li className=' pt-3 pr-4 p-2 transition-all duration-300' onClick={() => handleItemClick("Option 1")}>
                        <Link to="/ustaxonalar"><u>Производственные <br />цеха</u></Link>
                    </li>
                    <li className=' pt-3 pr-4 p-2 transition-all duration-300' onClick={() => handleItemClick("Option 2")}>
                        <Link to="/kompaniyayangiliklari"><u>Новости компании</u></Link>
                    </li>
                    <li className=' pt-3 pr-4 p-2 transition-all duration-300' onClick={() => handleItemClick("Option 3")}>
                        <Link to="/tashrifbuyuruvchilar"><u>Для посетителей</u></Link>
                    </li>
                   
                </ul>
            )}
        </div>
    );
};

export default YangiliklarDropdown;
