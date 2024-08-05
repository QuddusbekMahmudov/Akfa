import React from 'react'
import { Link } from 'react-router-dom';
import delyuks from "../Img/Delyuks.webp";
import PageWrapper from '../Components/PageWrapper';
import standart from "../Img/standart.webp";

const Luks = () => {

    return (
        <PageWrapper>
            <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-12'>
                <h2 className="text-2xl sm:text-3xl md:text-4xl opacity-75 font-bold mb-4 sm:mb-14">Делюкс</h2>
                <h3 className='mb-5 opacity-60 flex space-x-3'>
                    <Link to='/narxlar' className='text-[#79c701] text-lg'>Прайс-лист /</Link><span className='font-medium'>Делюкс</span>
                </h3>
                <ul className='grid grid-cols-1 lg:grid-cols-2 space-y-10 lg:space-y-0 items-start lg:space-x-10'>
                    <li>
                        <img className=' w-full rounded' src={delyuks} alt="deluks" />
                    </li>
                    <li>
                    <h3 className='text-xl sm:text-2xl md:text-4xl font-bold mb-4 opacity-60 sm:mb-10"'>Делюкс</h3>
                    <p className=' opacity-60 text-md sm:text-lg md:text-xl leading-relaxed mb-3'>Номера Делюкс созданы для гостей, которые любят роскошь и высокий уровень комфорта. Эти номера оснащены современной мебелью и великолепным интерьером. В номерах Делюкс для наших гостей предусмотрены специальные услуги, включая ночное обслуживание и доставку еды и напитков в номер. В каждом номере Делюкс есть телевизор с большим экраном, просторная кровать, современная ванная комната и окна с панорамным видом.
                    </p>
                       <div className='flex flex-col space-y-3  opacity-60 text-md sm:text-lg md:text-xl leading-relaxed'>
                       <span>Одноместные номера</span>
                        <span>Площадь - 24 кв. м</span>
                        <span>Стоимость за сутки:</span>
                        <span>от 2 700 р.</span>
                       </div>
                    </li>
                </ul>

            </div>
        </PageWrapper>
    )
}

export default Luks;

