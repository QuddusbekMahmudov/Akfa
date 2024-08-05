import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import akfa1 from "../Img/oqakfa.webp";
import akfa2 from "../Img/jigarrangakfa.webp";
import akfa3 from "../Img/seriyakfa.webp";
import { Link } from 'react-router-dom';

const Turlixilakfaromlar = () => {
    useEffect(() => {
        AOS.init({ duration: 700 }); // Animatsiya davomiyligi
    }, []);


    const list = [
        {
            img: akfa1,
            title: "Rehau Thermo",
            description: "При традиционной глубине 60 мм окна обладают повышенной энергоэффективностью благодаря 4-камерному профилю",
            profile: "REHAU Thermo 60, 4-х камерный",
            glazing: "2-х камерный, 32мм",
            seal: "Rehau Raucell: черный, серый, белый",
            fittings: "Roto NT класс – Премиум",
            price: "6 450",
            linkTitle: '/YagonaPanjaraliOyna1'
        },
        {
            img: akfa2,
            title: "Rehau Grazio",
            description: "При традиционной глубине 60 мм окна обладают повышенной энергоэффективностью благодаря 4-камерному профилю",
            profile: "REHAU Thermo 60, 4-х камерный",
            glazing: "2-х камерный, 32мм",
            seal: "Rehau Raucell: черный, серый, белый",
            fittings: "Roto NT класс – Премиум",
            price: "7 300",
            linkTitle: '/IkkiQavatliOyna1'

        },
        {
            img: akfa3,
            title: "Rehau Delight",
            description: "С окнами Rehau Delight в помещение будет проникать на 10% больше света – это возможно благодаря уменьшению высоты профиля",
            profile: "REHAU Delight 60, 5-и камерный",
            glazing: "2-х камерный, 32мм",
            seal: "Rehau Raucell: черный, серый, белый",
            fittings: "Roto NT класс – Премиум",
            price: "8 250",
            linkTitle: '/UchOsilganDeraza1'

        },
        
    
    ];

    return (
        <div className='w-full max-w-base mx-auto px-5'>
            <div className='mb-8' data-aos="fade-up">
                <h1 className='sm:font-extrabold mb-4 text-3xl font-bold md:text-4xl lg:text-5xl'>Выберите один из профилей Rehau</h1>
                <p className='font-medium text-md sm:text-xl opacity-70'>Дизайн и теплоизоляция, окна премиум-класса по цене эконом</p>
            </div>

            <div>
                <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-y-3 sm:gap-4  md:gap-6 lg:gap-8">
                {list.map((item) => (
                         <li className='flex flex-col border-2 rounded-lg p-6 space-y-4 '>
                             <img className='w-40 h-50' src={item.img} alt={item.title} />
                             <Link>
                                 <h2 className='font-bold text-black text-2xl sm:text-3xl mb-4'>{item.title}</h2>
                                 <p className='text-black'>{item.description}</p>
                             </Link>
                             <p>{item.profile}</p>
                             <p>{item.glazing}</p>
                             <p>{item.seal} </p>
                             <p>{item.fittings} </p>
                             <p>
                                 <span className='opacity-60'>oт</span>
                                 <span className='text-black opacity-100 font-semibold text-xl sm:text-3xl mx-2'>{item.price}</span>
                                 <span className='opacity-60'>руб./м²</span>
                             </p>
                             
                             <Link to={item.linkTitle} className='grow border-b-2 w-[50%] border-black pb-2'> подробнее о профиле</Link>
                         </li>
                        ))}
                </ul>
            </div>
        </div>
    );
};


export default Turlixilakfaromlar;
