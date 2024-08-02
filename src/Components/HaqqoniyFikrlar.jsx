import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import yulduz from '../Img/yulduzlar.svg';
import Andrey from '../Img/Andrey.webp';
import Kristina from '../Img/Kristina.webp';
import Evgilena from '../Img/Evgeniya.webp';
import { Link } from 'react-router-dom';

const Haqqoniyfikrlar = () => {

    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const list1 = [
        {
            id: 1,
            rasmlar: yulduz,
            matn: 'Очень понравилась работа! Хорошие работники, быстрая работа. Цена и качество соответствуют, сделали недорого и аккуратно. Спасибо большое))👌🔥',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.86 34.64" width="100" height="100" data-prefix="icosfzekd">
                    <g data-name="Слой 2">
                        <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1" class="path-ikzcbhz3n" fill="#eceff7"></path>
                    </g>
                </svg>
            ),
            userName: 'Желяев Андрей',
            userRole: 'Остекление квартиры',
            userImage: Andrey,
        },
        {
            id: 2,
            rasmlar: yulduz,
            matn: 'Очень понравилась работа! Хорошие работники, быстрая работа. Цена и качество соответствуют, сделали недорого и аккуратно. Спасибо большое))👌🔥',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.86 34.64" width="100" height="100" data-prefix="icosfzekd">
                    <g data-name="Слой 2">
                        <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1" class="path-ikzcbhz3n" fill="#eceff7"></path>
                    </g>
                </svg>
            ),
            userName: 'Авдеева Кристина',
            userRole: 'Остекление дома под ключ',
            userImage: Kristina,
        },
        {
            id: 3,
            rasmlar: yulduz,
            matn: 'Заказала в январе 2022 года остекление балконов - замерили, подсказывали как и что выбрать, чтобы не переплатить и в то же время, все понравилось, безумно рада!',
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 46.86 34.64" width="100" height="100" data-prefix="icosfzekd">
                    <g data-name="Слой 2">
                        <path d="M24.8 30.52v-13a11.67 11.67 0 0 1 2.88-7.06L36.91 1c1.58-1.62 2.41-1.15 1.85 1l-1.9 7.37a3 3 0 0 0 3.09 4h2.8a4.13 4.13 0 0 1 4.12 4.12v13a4.13 4.13 0 0 1-4.12 4.12H28.92a4.13 4.13 0 0 1-4.12-4.09zM4.12 34.64h13.82a4.13 4.13 0 0 0 4.12-4.12v-13a4.13 4.13 0 0 0-4.12-4.12h-2.8a3 3 0 0 1-3.09-4L14 2c.56-2.19-.27-2.66-1.85-1l-9.27 9.42A11.67 11.67 0 0 0 0 17.48v13a4.13 4.13 0 0 0 4.12 4.16z" data-name="Layer 1" class="path-ikzcbhz3n" fill="#eceff7"></path>
                    </g>
                </svg>
            ),
            userName: 'Брусницина Евгения',
            userRole: 'Остекление балкона',
            userImage: Evgilena,
        },
    ];

    return (
        <div className='bg-[#f7f7f7]' >
            <div className="w-full max-w-base mx-auto px-5  py-12 sm:py-16 md:24 relative">
                <div data-aos="fade-up" className=' pb-12 sm:mb-14 md:16'>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold opacity-90 md:16 sm:mb-10 mb-5">
                        Только честные отзывы
                    </h1>
                    <p className='opacity-60'>
                        Мы не скрываем или не покупаем отзывы, Вы можете зайти на независимые площадки и убедиться сами -
                    </p>
                    <p className='sm:ml-3'>
                        <a className='text-red-600 underline text-lg' href="https://market.yandex.ru" target="_blank" rel="noopener noreferrer">Яндекс.Маркет</a> и
                        <a className='text-red-600 underline text-lg' href="https://otzovik.com" target="_blank" rel="noopener noreferrer">Отзовик</a>
                    </p>
                </div>

                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {list1.map((item) => (
                        <li key={item.id} className="relative ">
                          <div className="bg-white flex flex-col items-start p-10  rounded-xl">
                          <div className="flex space-x-2 mb-2">
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} className='w-6 h-6' src={item.rasmlar} alt={`yulduz-${index}`} />
                                ))}
                            </div>
                            <p>{item.matn}</p>
                            <span data-aos="fade-left"
                                data-aos-offset="100"
                                data-aos-duration="1500"
                                className='absolute  right-0 bottom-24 '>{item.icon}
                             </span>
                          </div>

                               <div className="flex absolutex items-center mt-4">
                                <img src={item.userImage} alt={item.userName} className=" w-24 h-24 rounded-full mr-4 transition-transform duration-700 scale-up-on-load     " />
                                <span>
                                    <p className="text-lg font-bold">{item.userName}</p>
                                    <p className="text-sm opacity-60">{item.userRole}</p>
                                </span>
                               </div>

                        </li>
                    ))}
                </ul>

                <Link >
                    <span className="border-b-[1px] w-full border-b-black text-black/60 pb-4">читать все отзывы</span>
                </Link>
            </div>
        </div>
    );
};

export default Haqqoniyfikrlar;
