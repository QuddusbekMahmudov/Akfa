import React, { useEffect } from 'react';
import AOS from 'aos';
import kuchuk from '../Img/kuchuk.webp';
import mushuk from '../Img/mushuk.webp';

const Aksiyalar = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className='w-full max-w-base mx-auto px-5 py-20'>
            <h1 data-aos="fade-up" className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Акции и скидки на окна</h1>
            <div className="w-full mx-auto">
                <ul className='grid md:grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8'>
                    <li className='group w-full sm:m-5 h-[350px] overflow-hidden relative inline-block cursor-pointer rounded-xl'>
                        <img className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' src={kuchuk} alt="kuchuk" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500 flex flex-col justify-end items-start text-white p-12 space-y-4">
                            <div data-aos="fade-up">
                                <button className='bg-[#ffb500] px-5 py-2 rounded-xl'>Скидка до 9 апреля</button>
                                <h3 className='font-bold text-3xl'>До 15% на отделку</h3>
                                <p className='text-lg'>и до 30% на остекление</p>
                            </div>
                        </div>
                    </li>
                    <li className='group w-full sm:m-5 h-[350px] overflow-hidden relative inline-block cursor-pointer rounded-xl'>
                        <img className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110' src={mushuk} alt="mushuk" />
                        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-opacity duration-500 flex flex-col justify-end items-start text-white p-12 space-y-4">
                            <div data-aos="fade-up">
                                <button className='bg-[#ffb500] px-5 py-2 rounded-xl'>Выгодное предложение</button>
                                <h3 className='font-bold text-3xl'>Скидка на окна до 8%</h3>
                                <p className='text-lg'>При заказе в день замера</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Aksiyalar;
