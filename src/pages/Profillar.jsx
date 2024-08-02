import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';

const Profillar = () => {
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> Профили
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Профили</h1>
        <div className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          <p>Окна из алюминиевого профиля устанавливают в коттеджах, зимних садах, беседках, кафе, на витринах, террасах. Они пропускают больше света, чем пластиковые. Профильные системы из алюминия подходят для крупногабаритного панорамного остекления, дверных проемов. Они выдерживают большую нагрузку, разнообразны по оформлению. Есть профили с термовставкой, хорошо изолирующие шум, тепло.</p>
          <p>Алюминиевые окна долговечны, сохраняют первоначальные свойства на протяжении нескольких десятков лет. Они устойчивы к осадкам, огню, механическому воздействию, не боятся ржавчины. Заказать в Москве алюминиевые окна и двери от производителя вы можете в нашей компании. Мы изготавливаем и устанавливаем оконные системы любой формы и размера с гарантией 5 лет.</p>
        </div>

        <div className="space-y-5">
          <Link to='/YagonaPanjaraliOyna1' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Одностворчатое окно</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/IkkiQavatliOyna1' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Двухстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/UchOsilganDeraza1' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'> Трехстворчатое окно</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>

        </div>
        <Outlet />
      </div>
    </PageWrapper>
  )
}

export default Profillar
