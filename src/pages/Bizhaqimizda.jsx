import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Aleksandra from '../Img/Aleksandra.webp'
import Aleksandr from '../Img/Aleksandr.webp'
import Kril from '../Img/Kril.webp'
import x from "../Img/ximg.png";
import PageWrapper from '../Components/PageWrapper';

const BizHaqimizda = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setRotate(true);
        setIsModalOpen(prev => !prev);
        setTimeout(() => setRotate(false), 300);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape') {
                setIsModalOpen(false);

            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            setIsModalOpen(false);
        }
    };
    const list = [
        {
            id: 1,
            matn1: "Хотел бы отметить дружелюбный подход и лояльность к клиентам, а это всегда помогает сделать процесс взаимодействия приятным и продуктивным. Здорово, что вы искренне интересуетесь нашими потребностями и ожиданиями. Сотрудничество стало для меня приятным опытом.",
            rasmlar: Kril,
            title: 'Кирилл Яковлев',

        },
        {
            id: 2,
            matn1: "Обращаюсь сюда уже не первый раз, и могу с уверенностью сказать, что вы делаете свою работу великолепно! Ценю высокий профессионализм, ответственность и чуткое отношение к клиенту. Спасибо за отличную работу",
            rasmlar: Aleksandra,
            title: 'Александра Сомова',

        },
        {
            id: 3,
            matn1: "Очень благодарен за теплый и профессиональный подход, который я получил. Спасибо за ответственность, открытость и готовность помочь. Всегда буду рекомендовать вас друзьям и знакомым",
            rasmlar: Aleksandr,
            title: 'Александр Ягудин',

        },


    ]
    return (
        <>
            <PageWrapper>
                <div className='w-full max-w-base pt-12 pb-16 md:pb-[100px] px-5 md:px-5 mx-auto'>
                    <div className='flex items-center pt-10 mb-7'>
                        <Link to={'/'} className="text-[#79c701] text-[14px] md:text-[16px]"><u>Главная</u><span className='mx-1'>/</span> </Link>
                        <Link to='/Okompany' className="text-[#79c701] text-[14px] md:text-[16px]"><u>О компании </u><span className='mx-1'>/</span></Link>
                        <p className='text-[#a5a3a3] text-[14px] md:text-[16px]'>Отзывы о нас</p>
                    </div>
                    <h3 className='font-bold text-3xl md:text-5xl sm:mb-16'>Отзывы о нас</h3>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 '>

                        {list.map((item) => {
                            return (

                                <li>
                                    <p className='text-[15px] md:text-[17px] mb-2 opacity-65'>{item.matn1}</p>
                                    <div className='flex items-center mb-7'>
                                        <img className='rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-5 ' src={item.rasmlar} alt="Kril" />
                                        <h3 className='text-[18px] md:text-[20px] font-bold opacity-65'>{item.title}</h3>
                                    </div>
                                </li>
                            );
                        })}

                    </ul>

                    <button onClick={() => setIsModalOpen(true)} className='bg-blue-500 px-6 md:px-10 py-4 rounded-md text-[14px] md:text-[16px] text-white hover:bg-blue-400'>Оставить отзыв</button>
                </div>
            </PageWrapper>

            {isModalOpen && (

                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={handleOverlayClick}>
                    <div className='max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] mt-24 md:mt-36 lg:mt-0  bg-white w-full mx-auto rounded-xl relative  p-3 sm:p-9'>
                        <button onClick={() => setIsModalOpen(false)} className='absolute top-4 right-4 w-12 md:w-10 h-12 md:h-10'><img src={x} alt="img" /></button>
                        <div className='px-5 md:px-10 py-12'>

                            <h1 className='text-black/50 text-3xl md:text-3xl font-bold mb-7'>Оставить отзыв</h1>
                            <form>
                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Имя <span className='text-red-500 font-bold'>*</span></p>
                                <input className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="text" />
                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Телефон <span className='text-red-500 font-bold'>*</span></p>
                                <input className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="tel" />
                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Текст отзыва <span className='text-red-500 font-bold'>*</span></p>
                                <textarea className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' name="Message" ></textarea>
                            </form>
                            <div className='flex items-center mb-7'>
                                <label className="flex items-start space-x-2">
                                    <input type="checkbox" className="form-checkbox h-10 w-10 bg-black border-gray-300 rounded focus:ring-0 cursor-pointer" />
                                    <p className="opacity-60">
                                        Я согласен(а) с обработкой персональных данных и{' '}
                                        <Link to="/foydalanishshartlari" target="_blank"><u>политикой конфиденциальности</u></Link>
                                    </p>
                                </label>
                            </div>
                            <button className='px-5 md:px-12 py-3 bg-[#4285f4] text-white rounded-md hover:bg-[#33afe9] duration-500'>Отправить</button>
                        </div>
                    </div>
                </div>
            )}

        </>
    );
}

export default BizHaqimizda;

