import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';


const Okompany = () => {
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> О компании
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>О компании</h1>
        <div className='space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          <p>
            Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты. Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в большой мир грамматики.</p>
          <p>Эта парадигматическая страна, в которой предложения залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна маленькая строчка рыбного текста, решила выйти в большой мир грамматики. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами. Даже всемогущая пунктуация не имеет власти над рыбными текстами, ведущими безорфографичный образ жизни.</p>
        </div>

        <div className="space-y-5">
          <Link to='/Kamanda' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Наша команда</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/Bizhaqimizda' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Отзывы о нас</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
        </div>
        <Outlet />
      </div>
    </PageWrapper>
  );
};

export default Okompany;
