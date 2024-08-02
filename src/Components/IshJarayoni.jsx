import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS uchun kerak bo'lgan CSS import
import etap1 from '../Img/etap1.svg';
import etap2 from '../Img/etap2.svg';
import etap3 from '../Img/etap3.svg';
import etap4 from '../Img/etap4.svg';
import etap5 from '../Img/etap5.svg';
import etap6 from '../Img/etap6.svg';
import icon1 from '../Img/1img.png';
import icon2 from '../Img/2img.png';
import icon3 from '../Img/3img.png';
import icon4 from '../Img/4img.png';
import icon5 from '../Img/5img.png';
import icon6 from '../Img/6img.png';

const IshJarayoni = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 }); // Animatsiya davomiyligini sozlash
    }, []);

    const list = [
        {
            id: 1,
            rasmlar: etap1,
            title: 'Предварительный расчёт',
            matn: 'Наши специалисты помогут Вам в выборе окон, в зависимости от ваших нужд',
            icon: icon1
        },
        {
            id: 2,
            rasmlar: etap2,
            title: 'Замер и подбор варианта',
            matn: 'К Вам приедет замерщик, произведет замеры, ответит на все ваши вопросы',
            icon: icon3
        },
        {
            id: 3,
            rasmlar: etap3,
            title: 'Проект и окончательная смета',
            matn: 'Составляем смету, в которой будут учтены все расходы на монтаж и материалы',
            icon: icon2
        },
        {
            id: 4,
            rasmlar: etap4,
            title: 'Оформление заказа и предоплата 50%',
            matn: 'После сметы, специалист оформит договор и отправит окна в производство',
            icon: icon4
        },
        {
            id: 5,
            rasmlar: etap5,
            title: 'Доставка',
            matn: 'В оговоренный день вам доставят готовые окна и начнут монтаж',
            icon: icon5
        },
        {
            id: 6,
            rasmlar: etap6,
            title: 'Монтаж и сдача объекта',
            matn: 'Монтажники демонтируют старые и установят новые. Уберут весь мусор и вручат гарантийную документацию!',
            icon: icon6
        },
    ];

    return (
        <div className='bg-[#f7f7f7]'>
            <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20 relative">
                <div data-aos="fade-up" className=' mb-10 sm:mb-20'>
                    <h1 className=" text-2xl sm:text-3xl md:text-5xl font-bold mb-4 opacity-80">
                        Этапы работы
                    </h1>
                    <p className="opacity-70 text-md sm:text-xl">
                        Всего 6 шагов для успешного сотрудничества!
                    </p>
                </div>
                <ul className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {list.map((item) => (
                        <li key={item.id} className="space-y-5 flex flex-col relative border-2 hover:border-[#ffb500] transition-colors duration-500 rounded-lg p-8 pb-20 overflow-hidden">
                            <img className='w-20 h-16 opacity-70' src={item.rasmlar} alt={item.title} />
                            <div className="space-y-3">
                                <h3 className="font-bold text-2xl">{item.title}</h3>
                                <p className="text-lg opacity-60">{item.matn}</p>
                            </div>
                            <img data-aos="fade-left"
                                data-aos-offset="100" // Masofani oshirish
                                data-aos-duration="1500" className=' w-10 h-10 sm:w-20 sm:h-20 absolute -bottom-3 right-2 opacity-60 bg-transparent rounded-full z-20 transition-transform duration-500 hover:opacity-100 hover:scale-110 hover:bg-[#ffb500]' src={item.icon} alt="icon" />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default IshJarayoni;
