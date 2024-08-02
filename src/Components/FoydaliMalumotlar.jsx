import React from 'react';
import eshik from '../Img/foydali1.webp';
import deraza from '../Img/foydali2.webp';
import { Link } from 'react-router-dom';

const FoydaliMalumotlar = () => {
    const list = [
        {
            id: 1,
            rasmlar: eshik,
            time: '8 июля 2022',
            title: 'Сбор информации',
            matn: 'В любом случае, каким бы экспертом в данной теме вы не были, желательно ознакомиться с материалами других авторов.',
            linkTitle: '/malumotyigish',
        },
        {
            id: 2,
            rasmlar: deraza,
            time: '1 марта 2022',
            title: 'Оптимизация статьи для блога',
            matn: 'Почему этот пункт идет вторым? Потому что после сбора информации необходимо начать подготовку к оптимизации статьи.',
            linkTitle: '/bloguchunmaqola', 
        },
    ];

    return (
        <div className="w-full max-w-base mx-auto px-5 my-10  sm:py-16 md:20 relative">
            <h1 className=" text-2xl sm:text-3xl md:text-5xl font-bold opacity-90 md:16 sm:mb-10 mb-5">
                Полезно знать
            </h1>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 sm:gap-12">
                {list.map((item) => (
                    <li key={item.id} className=" lg:space-x-10 flex flex-col lg:flex-row lg:justify-between lg:items-start">
                        <img className='rounded-xl w-96 lg:w-60 object-cover lg:h-64' src={item.rasmlar} alt={item.title} />
                        <div className="space-y-3 flex flex-col">
                            <time dateTime="8.07.2022">{item.time}</time>
                            <Link to={item.linkTitle} className="font-bold text-[28px]">{item.title}</Link>
                            <p className="text-md opacity-60">{item.matn}</p>
                            <Link to={item.linkTitle}>
                                <span className="border-b-[1px] w-full border-b-black text-black/60 pb-4">подробнее</span>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FoydaliMalumotlar;
