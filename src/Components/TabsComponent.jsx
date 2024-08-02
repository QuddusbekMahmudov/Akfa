import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import x from "../Img/ximg.png";
import deraza1 from '../Img/bittalikderaza.webp';
import deraza2 from '../Img/ikkitalikderaza.webp';
import deraza3 from '../Img/uchtalikderaza.webp';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';

const TabsComponent = () => {

    const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
    const toggleInfoModal = () => {
        setIsInfoModalOpen(prev => !prev);
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
            deraza1: deraza2,
            deraza2: deraza3,
            deraza3: deraza1,
        },
        tab3: {
            deraza1: deraza3,
            deraza2: deraza1,
            deraza3: deraza2,
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
            <div className="border-gray-300 space-x-5 my-10 sm:my-20">
                {Object.keys(tabPrices).map(tabKey => (
                    <button
                        key={tabKey}
                        className={`py-2 px-7 text-sm font-medium rounded-xl ${activeTab === tabKey
                            ? ' bg-[#ffb500] text-white font-bold'
                            : 'font-bold border-[1px] text-black'
                            } transition duration-300 ease-in-out`}
                        onClick={() => setActiveTab(tabKey)}
                    >
                        {tabLabels[tabKey]}
                    </button>
                ))}
            </div>

            <ul className='grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
                <li>
                    <img className='w-56 h-96' src={deraza1} alt="deraza" />
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
                    <img className='w-[320px] h-96' src={deraza2} alt="deraza" />
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
                    <img className='w-[370px] h-96' src={deraza3} alt="deraza" />
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
                            <form className=" space-y-4 mb-5" action="#">
                                <input className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5" type="text" placeholder="Ваше имя" />
                                <input className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5" type="tel" placeholder="+7 (000) 090-99-99" />
                            </form>
                            <div className="flex justify-between items-start space-x-4 mb-5">
                                <label className="flex items-start space-x-2">
                                    <input type="checkbox" className="form-checkbox h-10 w-10 bg-black border-gray-300 rounded focus:ring-0 cursor-pointer" />
                                    <p className="opacity-60">
                                        Я согласен(а) с обработкой персональных данных и{' '}
                                        <Link to="/foydalanishshartlari" target="_blank"><u>политикой конфиденциальности</u></Link>
                                    </p>
                                </label>
                            </div>
                            <button className="py-6 px-20 w-full hover:text-black hover:border-[#63b700] border-2 text-white font-semibold hover:bg-white bg-[#63b700] rounded-lg transition-colors duration-300">
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default TabsComponent;
