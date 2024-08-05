import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';

const ObektlarVaXizmatKorsatish = () => {
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link>
          Услуги
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>
          Услуги</h1>
        <div className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          <p>
            Наша компания на протяжении долгого времени успешно поставляет оконные профили REHAU, а также предлагает услуги их доставки и монтажа, остекления балконов и лоджий. Со времени основания нашими ведущими принципами остаются ответственность, оперативность, взаимовыгодность.</p>
          <p>В работе особое внимание уделяется уровню сервиса: мы заботимся о том, чтобы каждый клиент ощущал комфорт на всех этапах сотрудничества – от замера до монтажа. Благодаря профессионализму каждого из сотрудников, слаженной работе коллектива и индивидуальному подходу мы гарантируем безупречный результат. </p>
          <p>У нас вы можете заказать услуги качественного остекления по приемлемым ценам. По вашей просьбе пластиковые окна и двери привезут прямо к порогу, а затем осуществят их монтаж и предусмотренные отделочные работы в удобное для вас время. </p>
          <h2 className='text-[25px] text-gray-500 font-bold'>Сроки производства окон:</h2>
          <ul>
            <li className='font-normal text-[20px] space-y-5 opacity-60'>• Производство дверей и окон – 5 дней</li>
            <li className='font-normal text-[20px] space-y-5 opacity-60'>• Доставка – в течение 1 дня</li>
            <li className='font-normal text-[20px] space-y-5 opacity-60'>• Демонтаж старой двери или окна, установка и отделочные работы – 1 день</li>
          </ul>
        </div>

        <div className="space-y-5">
          <Link to='/YagonaPanjaraliOyna4' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Установка окон</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/IkkiQavatliOyna4' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Остекление квартир</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/UchOsilganDeraza4' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Остекление коттеджей</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/DerazaBilan4' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Ремонт окон</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/EgriOynalar4' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Скрытые петли</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>

        </div>
        <Outlet />
      </div>
    </PageWrapper>
  )
}

export default ObektlarVaXizmatKorsatish
