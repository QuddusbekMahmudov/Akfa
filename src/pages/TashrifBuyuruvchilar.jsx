import React from 'react'
import YangiliklarDropdown from '../Components/YangiliklarDropdown'
import { Link } from 'react-router-dom';
import bolim1 from '../Img/bolim1.webp'
import bolim4 from '../Img/bolim4.webp'
import bolim5 from '../Img/bolim5.webp'

import PageWrapper from '../Components/PageWrapper';

const TashrifBuyuruvchilar = () => {
    const list = [
        {
            id: 1,
            rasmlar: bolim1,
            time: '04.02.2020',
            title: 'Профессиональное обслуживание клиентов',
            matn: 'При создании новости, помимо заголовка и содержимого, Вы можете задать еще ряд параметров. Тут Вы видите пример заполнения анонса новости. Пройдя по ссылке "читать дальше" Вы можете ознакомиться с полным текстом новостей и примером заполнения.',
            linkTitle: '/xizmatkorsatish',
        },
        {
            id: 2,
            rasmlar: bolim4,
            time: '04.02.2020',
            title: 'Советы покупателям',
            matn: 'При создании новости, помимо заголовка и содержимого, Вы можете задать еще ряд параметров. Тут Вы видите пример заполнения анонса новости. Пройдя по ссылке "читать дальше" Вы можете ознакомиться с полным текстом новостей и примером заполнения.',
            linkTitle: '/savdoboyicha',
        },
        {
            id: 3,
            rasmlar: bolim5,
            time: '04.02.2020',
            title: 'JAMI Style & Branding',
            matn: 'При создании новости, помимо заголовка и содержимого, Вы можете задать еще ряд параметров. Тут Вы видите пример заполнения анонса новости. Пройдя по ссылке "читать дальше" Вы можете ознакомиться с полным текстом новостей и примером заполнения.',
            linkTitle: '/brand',
        },

    ];
    return (
        <PageWrapper>
            <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
                <h2 className='mb-5 opacity-60'>
                    <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to='/yangiliklar' className='text-[#79c701]'>Новости/</Link>Для посетителей
                </h2>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Для посетителей</h1>
                <YangiliklarDropdown />
                <div className='w-full max-w-[1450px] mx-auto py-5 '>
                    <ul className='space-y-2'>
                        {list.map((item) => (
                            <li className='flex flex-col space-y-2 py-4 px-5 border-[1px] rounded-md'>
                                <time className='opacity-60' datetime="2020-02-04">{item.time}</time>
                                <Link to={item.linkTitle} className='text-2xl text-[#79c701]'><u>{item.title}</u></Link>
                                <div className=" justify-between flex flex-col md:flex-row items-start flex-wrap ">
                                    <img src={item.rasmlar} alt="bolim1 " />
                                    <p className='md:ml-5 mt-5 md:mt-0 opacity-70 flex-1 overflow-auto'>{item.matn}</p>
                                </div>
                            </li>
                        ))}
                    </ul>

                </div>

            </div>
        </PageWrapper>
    )
}

export default TashrifBuyuruvchilar;
