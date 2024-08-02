import React from 'react';
import { Link } from 'react-router-dom';
import aksiya1 from "../Img/aksiya1.webp";
import aksiya2 from "../Img/aksiya2.webp";
import aksiya3 from "../Img/aksiya3.webp";

const Aksiya = () => {
  const list = [
    {
      id: 1,
      rasmlar: aksiya1,
      title: 'Бесплатный подарок с покупкой',
      matn1: 'с 26 ноября по 9 декабря',
      matn2: 'Получите бесплатный подарок при покупке товара или при достижении определенной суммы заказа',
      btn: 'Подробнее'

    },
    {
      id: 2,
      rasmlar: aksiya2,
      title: 'Скидка на сезонные товары',
      matn1: 'с 26 ноября по 9 декабря',
      matn2: 'Предлагаем скидки на товары, связанные с текущим сезоном, скидки на летние товары в летний период',
      btn: 'Подробнее'

    },
    {
      id: 3,
      rasmlar: aksiya3,
      title: 'Получи второй со скидкой',
      matn1: 'с 26 ноября по 9 декабря',
      matn2: 'Получите бесплатный подарок при покупке товара или при достижении определенной суммы заказа',
      btn: 'Подробнее'

    },

  ]
  return (
    <div className='w-full max-w-base mx-auto px-5 py-20'>
      <h2 className='mb-5 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная/</Link> Акции
      </h2>
      <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Акции</h1>
      <div className="w-full">

        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">

          {list.map((item) => {
            return (

              <li className='space-y-5 flex flex-col relative pb-32'>
                <img src={item.rasmlar} alt="акция 1" />
                <div className="opacity-60 space-y-3">
                  <p>{item.matn1}</p>
                  <h3 className='font-bold  text-xl sm:text-3xl'>{item.title}</h3>
                  <p className=' text-md sm:text-lg'>{item.matn2}</p>
                </div>
                <button className='text-white bg-[#4285f4] w-full py-4 rounded-lg absolute bottom-2 '>{item.btn}</button>
              </li>

            );
          })}


        </ul>
      </div>
    </div>
  );
};

export default Aksiya;
