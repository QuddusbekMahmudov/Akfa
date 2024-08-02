import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import Xizmat1 from '../Img/bir.png';
import Xizmat2 from '../Img/ikki.png';
import Xizmat3 from '../Img/uchinchi.png';
import Xizmat4 from '../Img/tortinchi.png';
import KompyuterchiOpa from '../Img/KompyuterchiOpa.webp';

const Yaxshixizmat = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 }); 
    }, []);

    const list = [
        {
            id: 1,
            rasmlar: Xizmat1,
            title: 'Бесплатный замер',
            matn: 'Мы предлагаем выезд замерщика в удобное для вас время',
        },
        {
            id: 2,
            rasmlar: Xizmat2,
            title: 'Беспроцентная расcрочка',
            matn: 'Вы можете установить окна в рассрочку на 12 месяцев без первоначального взноса',
        },
        {
            id: 3,
            rasmlar: Xizmat3,
            title: 'Монтаж по ГОСТу',
            matn: 'Все монтажные работы проводятся в соответствии с действующими требованиями ГОСТов',
        },
        {
            id: 4,
            rasmlar: Xizmat4,
            title: '5 лет гарантии',
            matn: 'Специалисты будут осуществлять сезонное обслуживание, регулировку фурнитуры и уход за уплотнителями',
        },
    ];

    return (
        <div className="w-full max-w-base mx-auto px-5 md:py-10 lg:py-20 relative">
            <div className="w-full max-w-full lg:max-w-[50%]">
                <div data-aos="fade-up" className='mb-10'>
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-4 opacity-80">
                        Хорошим окнам - хороший <br />
                        сервис!
                    </h1>
                    <p className=" text-md sm:text-xl font-semibold opacity-60">
                        Гарантируем качество, ведь наши окна созданы для вашего комфорта
                    </p>
                </div>
                <ul className="grid sm:grid-cols-2 gap-4">
                    {list.map((item) => (
                        <li key={item.id} className="space-y-5 flex flex-col relative">
                            <img className='w-28 h-24 object-cover' src={item.rasmlar} alt={item.title} />
                            <div className="space-y-3">
                                <h3 className="font-bold text-2xl">{item.title}</h3>
                                <p className="text-lg opacity-60">{item.matn}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <img
                data-aos="fade-left"
                data-aos-offset="200" // Masofani oshirish
                data-aos-duration="1500" // Animatsiya davomiyligini oshirish
                className=' hidden lg:block w-full max-w-[50%] h-full absolute top-0 -right-16 object-cover rounded-2xl translate-x-full'
                src={KompyuterchiOpa}
                alt="Kompyuterchi Opa"
            />
        </div>
    );
};

export default Yaxshixizmat;
