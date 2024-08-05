import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';

const PlastikOynalar = () => {
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> Пластиковые окна
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Пластиковые окна</h1>
        <div className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          <p>«Оконные технологии» — официальный поставщик окон REHAU в Москве. Мы изготавливаем окна и двери из оригинальных пластиковых профилей: Blitz, Delight, Brillant-Design, Geneo, Intelio, Grazio. Используем в производстве немецкую фурнитуру Siegenia и Roto. Даем гарантии на изготовленные конструкции и на выполненные работы по остеклению — 5 лет. Выполняем замер, производство и монтаж в течение 5 дней.</p>
        </div>

        <div className="space-y-5">
          <Link to='/YagonaPanjaraliOyna' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Одностворчатое окно</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/IkkiQavatliOyna' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Двухстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/UchOsilganDeraza' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Трехстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/DerazaBilan' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Окна с форточкой</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/EgriOynalar' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Фигурные окна</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/PremiumOynalar' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Окна премиум-класса</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
        </div>
        <Outlet />
      </div>
    </PageWrapper>
  )
}

export default PlastikOynalar
