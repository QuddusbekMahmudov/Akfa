import React from 'react';
import { Link } from 'react-router-dom';
import standart from "../Img/standart.webp";
import delyuks from "../Img/Delyuks.webp";
import komfort from "../Img/komfort.webp";
import biznes from "../Img/Biznes.webp";
import PageWrapper from '../Components/PageWrapper';

const Narxlarjadvali = () => {
  const list = [
   
    {
      id: 2,
      rasmlar: standart,
      title:'Cтандарт',
      matn:'Удобные и уютные номера идеально подойдут как для отдыха, так и для деловых поездок.',
      list:'Одноместные номера',
      list2:'Площадь - 24 кв. м',
      span: 'Стоимость за сутки:',
      span2: 'от 2 700 р.',
      btn: 'Забронировать',
      btn2: 'Подробнее'     
    },
   
    {
      id: 2,
      rasmlar: komfort,
      title:'Комфорт',
      matn:'Удобные и уютные номера идеально подойдут как для отдыха, так и для деловых поездок.',
      list:'Одноместные номера',
      list2:'Площадь - 24 кв. м',
      span: 'Стоимость за сутки:',
      span2: 'от 2 700 р.',
      btn: 'Забронировать',
      btn2: 'Подробнее'     
    },
    {
      id: 3,
      rasmlar: biznes,
      title:'Бизнес',
      matn:'Номер в гостинице обеспечит каждому гостю высокое качество сервиса по разумной цене.',
      list:'Двухместные номера',
      list2:'лощадь - 46 кв. м',
      span: 'Стоимость за сутки:',
      span2: ' от 2 700 р.',
      btn: 'Забронировать',
      btn2: 'Подробнее'     
    },
    {
      id: 4,
      rasmlar: delyuks,
      title:'Делюкс',
      matn:'Номер позволит ощутить себя как дома. Подходит для приятного отдыха двух гостей..',
      list:'Двухместные номера',
      list2:'лощадь - 46 кв. м',
      span: 'Стоимость за сутки:',
      span2: ' от 2 300 р.',
      btn: 'Забронировать',
      btn2: 'Подробнее'     
    },
  ]
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 pb-32 pt-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная  / </Link>Прайс-лист
        </h2>
        <h1 className='font-bold text-2xl md:text-3xl lg:text-5xl mb-16'>Прайс-лист</h1>
        <div className="w-full">
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-4 sm:gap-4 md:gap-6 lg:gap-8'>

          {list.map((item) => (
          <li className='space-y-5 flex flex-col relative'>
            <img src={item.rasmlar} alt={item.title} />
            <h3 className='font-bold text-3xl opacity-50'>{item.title}</h3>
            <div className="opacity-50 space-y-3">
              <p className='text-lg'>{item.matn}</p>
              <ul className='w-full ml-5'>
                <li className='list-disc'>{item.list}</li>
                <li className='list-disc'>{item.list2}</li>
              </ul>
              <div className=' flex flex-col py-5'>
                <span>{item.span}</span>
                <span className='inline-block text-4xl font-bold grow'>{item.span2}</span>
              </div>
            </div>
            <div className='space-y-5'>
            <button className=' text-white bg-[#4285f4] w-full py-4 rounded-lg'>{item.btn}</button>
            <button className='  text-xl opacity-65 bg-[#d9e7fc] w-full py-4 rounded-lg'>{item.btn2}</button>
            </div>
          </li>
            ))}
          </ul>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Narxlarjadvali;
