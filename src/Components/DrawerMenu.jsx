import React, { useState, useRef, useEffect } from 'react';
import { Drawer, } from "@material-tailwind/react";
import { Link, NavLink } from 'react-router-dom';
import x from "../Img/ximg.png";
import arrow from '../Img/arrow1.png'

export function DrawerMenu() {
    const [open, setOpen] = useState(false);
    const [current, setCurrent] = useState('mail');
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const menuRef = useRef(null);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const handleClick = (key) => {
        console.log('click ', key);
        setCurrent(key);
    };

    const toggleSubMenu = (key) => {
        setOpenSubMenu(openSubMenu === key ? null : key);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpenSubMenu(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (open && menuRef.current && !menuRef.current.contains(event.target)) {
                closeDrawer();
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [open]);


    return (
        <div className="relative ">
            <div>
                <button className=" xl:hidden z-50 fixed -top-1  -right-1 flex items-center space-x-4 text-white bg-[#63b700] px-8 py-4 rounded-lg" onClick={openDrawer}>
                    <span className='font-medium text-xl'>меню</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>

            {open && <div className="fixed inset-0 bg-black opacity-70 z-40 bg-overflow-hidden"></div>}

            <Drawer
                open={open}
                onClose={closeDrawer}
                className="w-full max-w-[400px] inline-block z-50 scroll-auto"
                placement="right"
            >
                <img className=' absolute top-0 right-0 w-10 h-10' src={x} alt="img" onClick={closeDrawer} />

                <div ref={menuRef} className=" w-full mt-10 max-w-[500px]  h-full max-h-[90vh] overflow-hidden overflow-y-auto flex flex-col">
                    <SubMenu
                        label="Пластиковые окна"
                        key="1"
                        current={current}
                        open={openSubMenu === '1'}
                        toggleSubMenu={() => toggleSubMenu('1')}
                        className="font-semibold  text-xl"
                    >
                        <ul>
                            <li>
                                <Link to={'/PlastikOynalar'} className=" bg-gray-100 opacity-70 flex font-normal items-center py-3 px-4 text-lg border-dotted border-b-2 cursor-pointer rounded-xl " onClick={() => handleItemClick("Option 7")}>
                                    Пластиковые окна

                                </Link>
                            </li>
                            <li >
                                <Link
                                    className='bg-gray-50 w-full font-normal inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 text-lg border-dotted border-b-2  cursor-pointer rounded-xl'
                                    to="/YagonaPanjaraliOyna"
                                    onClick={() => handleItemClick("Option 1")}
                                >
                                    Одностворчатое окно
                                </Link>
                            </li>
                            <li >
                                <Link
                                    className='bg-gray-100 w-full font-normal opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer rounded-xl text-lg border-dotted border-b-2 '
                                    to="/IkkiQavatliOyna"
                                    onClick={() => handleItemClick("Option 2")}
                                >
                                    Двухстворчатое окно
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='bg-gray-50 font-normal w-full inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer rounded-xl text-lg border-dotted border-b-2 '
                                    to="/UchOsilganDeraza"
                                    onClick={() => handleItemClick("Option 3")}
                                >
                                    Трехстворчатое окно
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className='bg-gray-100 font-normal w-full opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer rounded-xl text-lg border-dotted border-b-2 '
                                    to="/DerazaBilan"
                                    onClick={() => handleItemClick("Option 4")}
                                >
                                    Окна с форточкой
                                </Link>
                            </li>
                            <li >
                                <Link
                                    className='bg-gray-50 font-normal w-full inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer rounded-xl text-lg border-dotted border-b-2 '
                                    to="/EgriOynalar"
                                    onClick={() => handleItemClick("Option 5")}
                                >
                                    Фигурные окна
                                </Link>
                            </li>
                            <li >
                                <Link
                                    className='bg-gray-100 font-normal w-full inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer rounded-xl text-lg border-dotted border-b-2 '
                                    to="/PremiumOynalar"
                                    onClick={() => handleItemClick("Option 6")}
                                >
                                    Окна премиум-класса
                                </Link>
                            </li>
                        </ul>
                    </SubMenu>

                    <SubMenu
                        label=" Профили"
                        key="2"
                        current={current}
                        open={openSubMenu === '2'}
                        toggleSubMenu={() => toggleSubMenu('2')}
                        className="font-semibold  text-xl"
                    >
                        <ul className='space-y-2'>
                            <li>
                                <Link to={'/Profillar'} className="bg-gray-100 w-[300px] inline-block opacity-70 font-normal  py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl " onClick={() => handleItemClick("Option 7")}>
                                    Профили
                                </Link>
                            </li>
                            <li>
                                <Link className=' w-[300px] bg-gray-50 inline-block opacity-70 font-normal  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl ' to="/YagonaPanjaraliOyna1" onClick={() => handleItemClick("Option 1")}>Rehau Thermo</Link >
                            </li>
                            <li >
                                <Link className=' w-[300px] bg-gray-100  opacity-70 hover:text-[#63b700] font-normal transition-all duration-300 py-3 inline-block px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl ' to={'/IkkiQavatliOyna1'} onClick={() => handleItemClick("Option 2")}>Rehau Grazio</Link>
                            </li>
                            <li >
                                <Link className=' w-[300px] bg-gray-50 inline-block opacity-70  font-normal hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl ' to={'/UchOsilganDeraza1'} onClick={() => handleItemClick("Option 3")}>Rehau Delight</Link>
                            </li>
                        </ul>
                    </SubMenu>

                    <SubMenu
                        label=" Балконы и лоджии"
                        key="3"
                        current={current}
                        open={openSubMenu === '3'}
                        toggleSubMenu={() => toggleSubMenu('3')}
                        className="font-semibold  text-xl"
                    >
                        <ul className='space-y-2'>
                            <li>
                                <Link to={'/BalkonVaLojiklar'} className=" inline-block py-3 px-4 opacity-70 bg-gray-100 w-[300px] text-lg border-dotted border-b-2 rounded-xl" onClick={() => handleItemClick("Option 7")}>
                                    Балконы и лоджии
                                </Link>
                            </li>
                            <li>
                                <Link className=' bg-gray-50 w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to="/YagonaPanjaraliOyna3" onClick={() => handleItemClick("Option 1")}>Одностворчатое окно</Link >
                            </li>
                            <li >
                                <Link className=' bg-gray-100 w-[300px]  opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to={'/IkkiQavatliOyna3'} onClick={() => handleItemClick("Option 2")}>Двухстворчатое окно</Link>
                            </li>
                            <li >
                                <Link className=' bg-gray-50 w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to={'/UchOsilganDeraza3'} onClick={() => handleItemClick("Option 3")}>Трехстворчатое окно</Link>
                            </li>
                            <li>
                                <Link className=' bg-gray-100 w-[300px]  opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to={'/DerazaBilan3'} onClick={() => handleItemClick("Option 4")}>Окна с форточкой</Link>
                            </li>
                            <li  >
                                <Link className='bg-gray-50 w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to={'/EgriOynalar3'} onClick={() => handleItemClick("Option 5")}>Фигурные окна</Link>
                            </li>
                            <li>
                                <Link className=' bg-gray-100 w-[300px] inline-block opacity-70  hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer text-lg border-dotted border-b-2 rounded-xl' to={'/PremiumOynalar3'} onClick={() => handleItemClick("Option 6")} >Окна премиум-класса</Link>
                            </li>
                        </ul>
                    </SubMenu>

                    <SubMenu
                        label=" Услуги и сервис"
                        key="4"
                        current={current}
                        open={openSubMenu === '4'}
                        toggleSubMenu={() => toggleSubMenu('4')}
                        className="font-semibold  text-xl"
                    >
                        <ul className='space-y-2'>
                            <li>
                                <Link to={'/ObektlarVaXizmatKorsatish'} className="dropdown-toggle opacity-70  px-4 py-3 inline-block  bg-gray-100 w-[300px] text-lg border-dotted border-b-2 rounded-xl" onClick={() => handleItemClick("Option 7")}>
                                    Услуги и сервис
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/YagonaPanjaraliOyna4"
                                    onClick={() => handleItemClick("Option 1")}
                                >
                                    Установка окон
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer bg-gray-100 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/IkkiQavatliOyna4"
                                    onClick={() => handleItemClick("Option 2")}
                                >
                                    Остекление квартир
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/UchOsilganDeraza4"
                                    onClick={() => handleItemClick("Option 3")}
                                >
                                    Остекление коттеджей
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 inline-block px-4 cursor-pointer bg-gray-100 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/DerazaBilan4"
                                    onClick={() => handleItemClick("Option 4")}
                                >
                                    Ремонт окон
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/EgriOynalar4"
                                    onClick={() => handleItemClick("Option 5")}
                                >
                                    Скрытые петли
                                </Link>
                            </li>
                        </ul>
                    </SubMenu>

                    <SubMenu
                        label=" Условия оплаты"
                        key="5"
                        current={current}
                        open={openSubMenu === '5'}
                        toggleSubMenu={() => toggleSubMenu('5')}
                        className="font-semibold text-xl"
                    >
                        <ul className='space-y-2'>
                            <li>
                                <Link
                                    to={'/TolovShartlari'}
                                    className="  opacity-70  py-3 px-4 cursor-pointer inline-block bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl" onClick={() => handleItemClick("Option 3")} >
                                    Условия оплаты
                                </Link>

                            </li>
                            <li>
                                <Link
                                    className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/YetkazibBerish"
                                    onClick={() => handleItemClick("Option 1")}
                                >
                                    Доставка
                                </Link>
                            </li>
                            <li>
                                <Link
                                    className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                    to="/TolovUsullari"
                                    onClick={() => handleItemClick("Option 2")}
                                >
                                    Способы оплаты
                                </Link>
                            </li>
                        </ul>
                    </SubMenu>
                    <ul>
                        <li >
                            <Link className=' font-semibold w-[300px] text-xl border-b-2  px-4 py-3 inline-block cursor-pointer ' to='narxlar' onClick={() => handleItemClick("Option 1")}>Прайс-лист</Link>
                        </li>
                        <li>
                            <Link className=' font-semibold w-[300px] text-xl border-b-2  px-4 py-3 inline-block cursor-pointer ' to='certifikat' onClick={() => handleItemClick("Option 2")}>Сертификаты</Link>
                        </li>
                        <li>
                            <Link className=' font-semibold w-[300px] text-xl border-b-2  px-4 py-3 inline-block cursor-pointer ' to='ruxsatbolimi' onClick={() => handleItemClick("Option 3")}>Регистрация</Link>
                        </li>
                    </ul>

                    <ul className=' flex flex-col'>
                        <li><NavLink className='font-semibold   py-3 px-4 cursor-pointer inline-block  w-[300px] text-lg d border-b-2 ' to="/aksiya">Акции</NavLink></li>
                        <SubMenu
                            label="О компании"
                            key="5"
                            current={current}
                            open={openSubMenu === '6'}
                            toggleSubMenu={() => toggleSubMenu('6')}
                            className="font-semibold text-xl"
                        >
                            <ul className='space-y-2'>
                                <li>
                                    <Link
                                         to='okompany'
                                        className="  opacity-70  py-3 px-4 cursor-pointer inline-block bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl" onClick={() => handleItemClick("Option 3")} >
                                       О компании
                                    </Link>

                                </li>
                                <li>
                                    <Link
                                        className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                         to="/Kamanda"
                                        onClick={() => handleItemClick("Option 1")}
                                    >
                                         Наша команда
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className=' inline-block opacity-70 hover:text-[#63b700] transition-all duration-300 py-3 px-4 cursor-pointer bg-gray-50 w-[300px] text-lg border-dotted border-b-2 rounded-xl'
                                       to="/Bizhaqimizda"
                                        onClick={() => handleItemClick("Option 2")}
                                    >
                                         Отзывы о нас
                                    </Link>
                                </li>
                            </ul>
                        </SubMenu>
                        <li><NavLink className='font-semibold  py-3 px-4 cursor-pointer inline-block  w-[300px] text-lg  border-b-2 ' to="/yangiliklar">Новости</NavLink></li>
                        <li><NavLink className='font-semibold  py-3 px-4 cursor-pointer inline-block  w-[300px] text-lg  border-b-2 ' to="/kontakt">Контакты</NavLink></li>
                    </ul>

                </div>
            </Drawer>
        </div>
    );
}

// MenuItem component
const MenuItem = ({ label, key, onClick, current, disabled }) => {
    return (
        <button
            onClick={() => !disabled && onClick(key)}
            className={`flex items-center p-4 ${current === key ? 'bg-gray-200' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
            {label}
        </button>
    );
};

// SubMenu component
const SubMenu = ({ label, key, current, open, toggleSubMenu, children, disabled, className }) => {
    return (
        <div className={className}>
            <button
                onClick={() => !disabled && toggleSubMenu()}
                className={`flex items-center justify-between  p-4 w-full text-left ${current === key ? 'bg-gray-200' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {label}
                <img className={`transition-transform duration-100 ${open ? 'rotate-90' : 'rotate-0'} w-3 h-3`}
                    src={arrow}
                    alt="arrow icon"
                />
            </button>


            {open && <div className="pl-4">{children}</div>}
        </div>
    );
};

