import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Aleksandra from '../Img/Aleksandra.webp';
import Aleksandr from '../Img/Aleksandr.webp';
import Kril from '../Img/Kril.webp';
import x from "../Img/ximg.png";
import PageWrapper from '../Components/PageWrapper';

const BizHaqimizda = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
    const [checkboxError, setCheckboxError] = useState(false);

    const handleName = (event) => {
        setName(event.target.value);
    };

    const handlePhone = (event) => {
        setPhone(event.target.value);
    };

    const handleMessage = (event) => {
        setMessage(event.target.value);
    };

    const handleCheckboxChange = (event) => {
        setIsCheckboxChecked(event.target.checked);
        setCheckboxError(false);
    };

    const handleSubmitInput = (event) => {
        event.preventDefault();
        const trimmedName = name.trim();
        const trimmedPhone = phone.trim();
        const trimmedMessage = message.trim(); // Corrected here

        if (trimmedName === "" || trimmedPhone === "" || trimmedMessage === "") {
            alert("Iltimos malumotni to'ldiring");
        } else if (!isCheckboxChecked) {
            setCheckboxError(true);

            alert("Iltimos, shaxsiy ma'lumotlaringizni tasdiqlang"); // Show error if checkbox is not checked
        } else {
            const telegram_bot_id = "7233272711:AAH91LcYfkmAKISHvEZrCQwnisVlVIf7MBE";
            const chat_id = "-1002167792051";

            const telegramMessage = `Name: ${trimmedName}\nPhone Number: ${trimmedPhone}\nMessage: ${trimmedMessage}`;

            axios
                .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
                    chat_id,
                    text: telegramMessage,
                })
                .then((response) => {
                    setName("");
                    setPhone("");
                    setMessage("");
                    setIsCheckboxChecked(false);
                    setCheckboxError(false);
                    alert("Ma'lumot yuborildi!");
                })
                .catch((error) => {
                    console.error("Error sending message:", error);
                });
        }
    };

    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
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
    ];

    return (
        <>
            <PageWrapper>
                <div className='w-full max-w-base pt-12 pb-16 md:pb-[100px] px-5 md:px-5 mx-auto'>
                    <div className='flex items-center pt-10 mb-7'>
                        <Link to={'/'} className="text-[#79c701] text-[14px] md:text-[16px]"><u>Главная</u><span className='mx-1'>/</span> </Link>
                        <Link to='/Okompany' className="text-[#79c701] text-[14px] md:text-[16px]"><u>О компании </u><span className='mx-1'>/</span></Link>
                        <p className='text-[#a5a3a3] text-[14px] md:text-[16px]'>Отзывы о нас</p>
                    </div>
                    <h3 className='font-bold text-3xl md:text-4xl sm:mb-16'>Отзывы о нас</h3>
                    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 '>
                        {list.map((item) => (
                            <li key={item.id}>
                                <p className='text-[15px] md:text-[17px] mb-2 opacity-65'>{item.matn1}</p>
                                <div className='flex items-center mb-7'>
                                    <img className='rounded-full w-[60px] md:w-[80px] h-[60px] md:h-[80px] mr-5 ' src={item.rasmlar} alt={item.title} />
                                    <h3 className='text-[18px] md:text-[20px] font-bold opacity-65'>{item.title}</h3>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <button onClick={() => setIsModalOpen(true)} className='bg-blue-500 px-6 md:px-10 py-4 rounded-md text-[14px] md:text-[16px] text-white hover:bg-blue-400'>Оставить отзыв</button>
                </div>
            </PageWrapper>

            {isModalOpen && (
                <div
                    className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
                    onClick={handleOverlayClick}>
                    <div className='max-w-[350px] sm:max-w-[450px] md:max-w-[550px] lg:max-w-[650px] xl:max-w-[750px] mt-24 md:mt-36 lg:mt-0  bg-white w-full mx-auto rounded-xl relative  p-3 sm:p-9'>
                        <button onClick={() => setIsModalOpen(false)} className='absolute top-4 right-4 w-12 md:w-10 h-12 md:h-10'><img src={x} alt="Close" /></button>
                        <div className='px-5 md:px-10 py-12'>
                            <h1 className='text-black/50 text-3xl md:text-3xl font-bold mb-7'>Оставить отзыв</h1>
                            <form onSubmit={handleSubmitInput}>
                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Имя <span className='text-red-500 font-bold'>*</span></p>
                                <input onChange={handleName}
                                    value={name}
                                    required className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="text" />

                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Телефон<span className='text-red-500 font-bold'>*</span></p>
                                <input onChange={handlePhone}
                                    value={phone}
                                    required className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' type="tel" />

                                <p className='text-[18px] md:text-[20px] mb-1 opacity-50'>Текст отзыва <span className='text-red-500 font-bold'>*</span></p>
                                <textarea
                                    onChange={handleMessage}
                                    value={message} className='text-black/50 w-full md:w-full text-[16px] px-5 py-3 mb-5 border-[1px] rounded-md hover:bg-[#a8dff8da] hover:border-[#a8dff8da] duration-500' name="Message">
                                </textarea>

                                <div className='flex items-center mb-7'>
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
                                <button type='submit' className='px-5 md:px-12 py-3 bg-[#4285f4] text-white rounded-md hover:bg-[#33afe9] duration-500'>Отправить</button>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default BizHaqimizda;
