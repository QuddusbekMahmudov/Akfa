import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const YagonaPanjaraliOyna4 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/ObektlarVaXizmatKorsatish'} className='text-[#79c701]'>Установка окон/</Link>Установка окон
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Установка окон</h1>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          От качества монтажа зависят герметичность окон, срок службы, способность противостоять порывам ветра, устойчивость к промерзанию. Заказать в Москве монтаж ПВХ-окон REHAU по ГОСТ вы можете в нашей компании.
        </p>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Мы остекляем проемы любого размера и конфигурации. Специалисты монтажных бригад имеют сертификаты, строго соблюдают строительные стандарты и технологии монтажа, в том числе обозначенные в ГОСТ 30971-2012, ГОСТ Р 52749-2007.
        </p>
        <h2 className='space-y-5 opacity-60 mb-5  text-md sm:text-xl md:text-2xl'>В услугу входят:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• демонтаж старого остекления;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• изготовление и установка окон, регулировка;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• отделка откосов, монтаж подоконников;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• вынос строительного мусора.</li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default YagonaPanjaraliOyna4
