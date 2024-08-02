import React from 'react'
import YangiliklarDropdown from '../Components/YangiliklarDropdown'
import { Link } from 'react-router-dom';
import bolim1 from '../Img/bolim1.webp'
import bolim2 from '../Img/bolim2.webp'
import bolim3 from '../Img/bolim3.webp'
import bolim4 from '../Img/bolim4.webp'
import bolim5 from '../Img/bolim5.webp'
import bolim6 from '../Img/bolim6.webp'
import bolim7 from '../Img/bolim7.webp'
import bolim8 from '../Img/bolim8.webp'
import PageWrapper from '../Components/PageWrapper';

const Yangiliklar = () => {

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
            id: 1,
            rasmlar: bolim2,
            time: '04.02.2020',
            title: 'Техподдержка 24 часа в сутки',
            matn: 'При создании новости, помимо заголовка и содержимого, Вы можете задать еще ряд параметров. Тут Вы видите пример заполнения анонса новости. Пройдя по ссылке "читать дальше" Вы можете ознакомиться с полным текстом новостей и примером заполнения.',
            linkTitle: '/texnikyordam',
        },
        {
            id: 2,
            rasmlar: bolim3,
            time: '04.02.2020',
            title: 'Помощь в заключении договоров',
            matn: 'В этом блоке мы рекомендуем разместить полный каталог с описанием Ваших товаров/услуг, рассказать о характеристиках предлагаемых товаров, создать любую удобную, соответствующую задачам вашего бизнеса, структуру каталога.',
            linkTitle: '/shartnomalar',
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
        {
            id: 2,
            rasmlar: bolim6,
            time: '04.02.2020',
            title: 'Инициативный аудит',
            matn: 'В этом блоке мы рекомендуем разместить полный каталог с описанием Ваших товаров/услуг, рассказать о характеристиках предлагаемых товаров, создать любую удобную, соответствующую задачам вашего бизнеса, структуру каталога.',
            linkTitle: '/tashabbus',
        },
        {
            id: 3,
            rasmlar: bolim7,
            time: '04.02.2020',
            title: 'Медийная реклама',
            matn: 'В этом блоке мы рекомендуем разместить полный каталог с описанием Ваших товаров/услуг, рассказать о характеристиках предлагаемых товаров, создать любую удобную, соответствующую задачам вашего бизнеса, структуру каталога.',
            linkTitle: '/media',
        },
        {
            id: 1,
            rasmlar: bolim8,
            time: '04.02.2020',
            title: 'Производство баннеров',
            matn: 'В этом блоке мы рекомендуем разместить полный каталог с описанием Ваших товаров/услуг, рассказать о характеристиках предлагаемых товаров, создать любую удобную, соответствующую задачам вашего бизнеса, структуру каталога.',
            linkTitle: '/banner',
        },
    ];
    return (
        <PageWrapper>
            <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
                <h2 className='mb-5 opacity-60'>
                    <Link to='/' className='text-[#79c701]'>Главная/</Link>Новости
                </h2>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Новости</h1>
                <YangiliklarDropdown />
                <div className='w-full mx-auto py-5 '>
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

export default Yangiliklar
