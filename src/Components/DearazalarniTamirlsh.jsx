import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS uchun kerak bo'lgan CSS import
import tamirlash1 from '../Img/tamirlash1.webp';
import tamirlash2 from '../Img/tamirlash2.webp';
import tamirlash3 from '../Img/tamirlash3.webp';
import tamirlash4 from '../Img/tamirlash4.webp';


const DerazalarniTamirlash = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 }); 
    }, []);

    const list = [
        {
            id: 1,
            rasmlar: tamirlash1,
            title: 'Москитные сетки',
            matn: 'Надежная преграда для насекомых и тополиного пуха',
        },
        {
            id: 2,
            rasmlar: tamirlash2,
            title: 'Детские замки',
            matn: 'Будут стоять на страже безопасности малыша и защитят окно от открывания',
        },
        {
            id: 3,
            rasmlar: tamirlash3,
            title: 'Отливы',
            matn: 'Устанавливается с внешней стороны для защиты конструкции и монтажного шва от осадков',
        },
        {
            id: 4,
            rasmlar: tamirlash4,
            title: 'Шумоизоляционный стеклопакет',
            matn: 'Стеклопакет с повышенными шумоизоляционными свойствами',
        },

    ];

    return (
        <div className='bg-[#f7f7f7]'>
            <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20 relative">
                <h1 data-aos="fade-up" className=" text-2xl sm:text-3xl md:text-5xl font-bold opacity-90 sm:mb-16 mb-5">
                    Укомплектуем окна всем<br /> необходимым
                </h1>

                <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
                    {list.map((item) => (
                        <li key={item.id} className="space-y-5 flex flex-col">
                            <img className=' rounded-xl w-full' src={item.rasmlar} alt={item.title} />
                            <div className="space-y-3">
                                <h3 className=" text-xl sm:text-2xl font-bold">{item.title}</h3>
                                <p className=" opacity-60 text-sm sm:text-md">{item.matn}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DerazalarniTamirlash;
