import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';

const BalkonVaLojikalar = () => {
  return (
      <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='sm:mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> Балконы и лоджии
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Балконы и лоджии</h1>
        <div className=' space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          <p>Наша компания остекляет балконы и лоджии любых форм и размеров. Изготавливаем и устанавливаем остекление из теплого пластикового профиля REHAU или холодного алюминия Provedal. Выполняем усиление парапета, выносное и панорамное остекление, отделку, объединение лоджий с комнатой. Даем гарантию на выполненные работы, выполняем послегарантийное и сервисное обслуживание.</p>
          <h3 className='text-gray-600 text-[22px] space-y-5'>Теплое остекление</h3>
          <p>Раздвижные алюминиевые окна экономят пространство, защищают балкон от осадков, сквозняков, пыли. Такие конструкции мало весят, не нагружают основание. Это экономичный вариант для тех, кто не планирует делать балкон частью жилого помещения.</p>
          <h3 className='text-gray-500 text-[22px] space-y-5'>Холодное остекление</h3>
          <p>Балконы с остеклением во всю стену пропускают максимальное количество солнечного света, открывают обзор на окрестности. Панорамные окна изготавливают из профилей с повышенной теплоизоляцией, дополняют энергосберегающим стелкопакетом.</p>
        </div>

        <div className="space-y-5">
          <Link to='/YagonaPanjaraliOyna3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Холодное остекление</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/IkkiQavatliOyna3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Теплое остекление</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/UchOsilganDeraza3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Панорамное остекление</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/DerazaBilan3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Балконный блок</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/EgriOynalar3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Ремонт балкона</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/PremiumOynalar3' className='bg-[#d9e7fc] w-[350px] md:w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Утепление балконов</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>

        </div>
        <Outlet />
      </div>
      </PageWrapper>
  )
}

export default BalkonVaLojikalar
