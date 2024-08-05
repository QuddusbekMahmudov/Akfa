import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import axios from "axios";
import x from "../Img/ximg.png";
import deraza1 from '../Img/bittalikderaza.webp';
import deraza2 from '../Img/ikkitalikderaza.webp';
import deraza3 from '../Img/uchtalikderaza.webp';
import seri1 from '../Img/1talikseriyderaza.jfif'
import seri2 from '../Img/2talikseriyderaza.jfif'
import seri3 from '../Img/3talikseriyderaza.jfif'
import taxta1 from '../Img/1taliktaxtaderaza.jfif'
import taxta2 from '../Img/2taliktaxtaderaza.jfif'
import taxta3 from '../Img/3taliktaxtaderaza.jfif'
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';



const TabsComponent = () => {

    // Telegram bot
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false); // New state for checkbox error
    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const toggleInfoModal = () => {
        setIsInfoModalOpen(prev => !prev);
    };
    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };
    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
        setCheckboxError(false); // Reset error state when checkbox is changed
    };

    const handleSubmitInput = (event) => {
        event.preventDefault();
        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();

        if (trimmedName === "" || trimmedPhone === "") {
            alert("Iltimos malumotni to'ldiring");
          } else if (!isCheckboxChecked) {
            setCheckboxError(true); // Show error message if checkbox is not checked
            alert("Iltimos, shaxsiy ma'lumotlaringizni tasdiqlang");
          } else {
            const telegram_bot_id = "7233272711:AAH91LcYfkmAKISHvEZrCQwnisVlVIf7MBE";
            const chat_id = "-1002167792051";

            const telegramMessage = `Name: ${name}\nPhone Number: ${phone}`;

            axios
                .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
                    chat_id,
                    text: telegramMessage,
                })
                .then((response) => {
                    setName("");
                    setPhone("");
                    setIsCheckboxChecked(false);
                    setCheckboxError(false); //
                    alert("Ma'lumot yuborildi!");
                })
                .catch((error) => {
                    console.error("Error sending message:", error);
                });
        }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsInfoModalOpen(false);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsInfoModalOpen(false);
        }
    };
    const [activeTab, setActiveTab] = useState('tab1');
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    const tabPrices = {
        tab1: {
            deraza1: 6450,
            deraza2: 8950,
            deraza3: 10250,
        },
        tab2: {
            deraza1: 6950,
            deraza2: 9440,
            deraza3: 11250,
        },
        tab3: {
            deraza1: 7200,
            deraza2: 9100,
            deraza3: 12000,
        }
    };

    const tabImg = {
        tab1: {
            deraza1: deraza1,
            deraza2: deraza2,
            deraza3: deraza3,

        },
        tab2: {
            deraza1: taxta1,
            deraza2: taxta2,
            deraza3: taxta3,
        },
        tab3: {
            deraza1: seri1,
            deraza2: seri2,
            deraza3: seri3,
        }
    };

    const tabLabels = {
        tab1: 'Thermo',
        tab2: 'Grazio',
        tab3: 'Delight'
    };

    return (
        <div className='w-full max-w-base mx-auto px-5 py-12'>
            <div data-aos="fade-up">
                <h1 className=' text-2xl sm:text-3xl md:text-5xl font-bold mb-4'>Цены на окна стандартных размеров</h1>
                <p className='opacity-70 text-md sm:text-xl md:text-2xl'>Сроки изготовления всего 5 дней</p>
            </div>
            <div className="border-gray-300 space-x-1 space-y-1 sm:space-y-0  sm:space-x-5 my-10 sm:my-20">
                {Object.keys(tabPrices).map(tabKey => (
                    <button
                        key={tabKey}
                        className={` py-2 px-7 text-sm font-medium rounded-xl ${activeTab === tabKey
                            ? ' bg-[#ffb500] text-white font-bold'
                            : 'font-bold border-[1px] text-black'
                            } transition duration-300 ease-in-out`}
                        onClick={() => setActiveTab(tabKey)}
                    >
                        {tabLabels[tabKey]}
                    </button>
                ))}
            </div>

            <ul className='grid mx-auto sm:mx-0 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <li>
                    <img className='w-56 h-96' src={tabImg[activeTab].deraza1} alt="deraza" />
                    <div className="space-y-2">
                        <Link to='/YagonaPanjaraliOyna'>
                            <p className='text-3xl font-semibold'>Одностворчатое окно</p>
                            <p className='font-medium opacity-70'>Размер: 800 х 1 420 мм (ширина х высота)</p>
                        </Link>
                        <p className='flex items-center'>
                            <span className='opacity-60 text-xl'>oт</span>
                            <span className='text-black opacity-100 text-2xl font-semibold mx-2'>
                                {tabPrices[activeTab].deraza1}
                            </span>
                            <span className='opacity-60 text-xl '>руб./м²</span>
                        </p>
                    </div>
                    <button onClick={toggleInfoModal} className="mt-5 py-4 px-10 text-white font-semibold bg-[#63b700] rounded-lg hover:text-black hover:border-[#63b700] border-2 hover:bg-white transition-colors duration-300">
                        Оставить заявку
                    </button>
                </li>
                <li>
                    <img className='w-[320px] h-96' src={tabImg[activeTab].deraza2} alt="deraza" />
                    <div className="space-y-2">
                        <Link to='/IkkiQavatliOyna'>
                            <p className='text-3xl font-semibold'>Двухстворчатое окно</p>
                            <p className='font-medium opacity-70'>Размер: 800 х 1 420 мм (ширина х высота)</p>
                        </Link>
                        <p className='flex items-center'>
                            <span className='opacity-60 text-xl'>oт</span>
                            <span className='text-black opacity-100 text-2xl font-semibold mx-2'>
                                {tabPrices[activeTab].deraza2}
                            </span>
                            <span className='opacity-60 text-xl '>руб./м²</span>
                        </p>
                    </div>
                    <button onClick={toggleInfoModal} className="mt-5 py-4 px-10 text-white font-semibold bg-[#63b700] rounded-lg hover:text-black hover:border-[#63b700] border-2 hover:bg-white transition-colors duration-300">
                        Оставить заявку
                    </button>
                </li>
                <li>
                    <img className='w-[370px] h-96' src={tabImg[activeTab].deraza3} alt="deraza" />
                    <div className="space-y-2">
                        <Link to='/UchOsilganDeraza'>
                            <p className='text-3xl font-semibold'>Трехстворчатое окно</p>
                            <p className='font-medium opacity-70'>Размер: 800 х 1 420 мм (ширина х высота)</p>
                        </Link>
                        <p className='flex items-center'>
                            <span className='opacity-60 text-xl'>oт</span>
                            <span className='text-black opacity-100 text-2xl font-semibold mx-2'>
                                {tabPrices[activeTab].deraza3}
                            </span>
                            <span className='opacity-60 text-xl '>руб./м²</span>
                        </p>
                    </div>
                    <button onClick={toggleInfoModal} className="mt-5 py-4 px-10 text-white font-semibold bg-[#63b700] rounded-lg hover:text-black hover:border-[#63b700] border-2 hover:bg-white transition-colors duration-300">
                        Оставить заявку
                    </button>
                </li>
            </ul>

            {isInfoModalOpen && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex lg:justify-center lg:items-center justify-center items-start z-50 transition-opacity duration-300 ${isInfoModalOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={handleOverlayClick}
                >
                    <div className={`bg-white w-full max-w-[80%] sm:max-w-[60%] mt-24 md:mt-36 lg:mt-0 lg:max-w-[550px] space-y-3 md:space-y-6  p-8 sm:p-10 md:p-20 rounded-lg shadow-lg transition-transform duration-300 ${isInfoModalOpen ? 'scale-100' : 'scale-95'}`}>
                        <img className='absolute top-1 right-1 sm:top-4 sm:right-4 w-12 h-12 cursor-pointer' src={x} alt="Close" onClick={toggleInfoModal} />
                        <h2 className=" text-md md:text-3xl font-bold text-center">Остались вопросы? Оставьте заявку</h2>
                        <span className='opacity-60 text-center inline-block'>и наши специалисты свяжутся с Вами в самое ближайшее время</span>
                        <div>
                            <form onSubmit={handleSubmitInput} className=" space-y-4 mb-5" action="#">
                                <input onChange={handleName}
                                    value={name}
                                    required className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5" type="text" placeholder="Ваше имя" />
                                <input onChange={handlePhone}
                                    value={phone}
                                    required className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5" type="tel" placeholder="+7 (000) 090-99-99" />
                                <div className="flex justify-between items-start space-x-4 mb-5">
                                    <label className="flex items-start space-x-2">
                                        <input type="checkbox"
                                            id="privacy"
                                            checked={isCheckboxChecked}
                                            onChange={handleCheckboxChange} className="form-checkbox h-10 w-10 bg-black border-gray-300 rounded focus:ring-0 cursor-pointer" />
                                        <p className="opacity-60">
                                            Я согласен(а) с обработкой персональных данных и{' '}
                                            <Link to="/foydalanishshartlari" target="_blank"><u>политикой конфиденциальности</u></Link>
                                        </p>

                                        {checkboxError && <p className="text-red-500 text-sm">Пожалуйста, подтвердите согласие</p>}
                                    </label>
                                </div>
                                <button  type="submit" className="py-6 px-20 w-full hover:text-black hover:border-[#63b700] border-2 text-white font-semibold hover:bg-white bg-[#63b700] rounded-lg transition-colors duration-300">
                                    Оставить заявку
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabsComponent;
