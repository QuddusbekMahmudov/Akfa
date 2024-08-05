import React from 'react'
import { Link } from 'react-router-dom'
import PlastikOynalar from './PlastikOynalar'
import PageWrapper from '../Components/PageWrapper'

const YagonaPanjaraliOyna1 = () => {
  return (
     <PageWrapper>
       <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/Profillar'} className='text-[#79c701]'>Профили/</Link>Rehau Thermo
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Rehau Thermo</h1>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>

          VIDNAL — алюминиевый профиль для оконно-дверных, фасадных систем. За счет уменьшенной ширины профиля «Виднал» конструкции выглядят легче, элегантнее. Изготовим окна и двери VIDNAL для коммерческих, жилых помещений, выполним фасадное, кровельное остекление. Обеспечиваем доставку и монтаж. Официальная гарантия — от 5 лет!
        </p>
        <h2 className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>Преимущества:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Низкая металлоемкость — доступнее цена, меньше нагрузка на несущие элемент</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Экономичность — предельно простой монтаж, умеренная стоимость конструкций.</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Долговечность. Коррозия и деформация исключены — дверные и оконные системы VIDNAL прослужат десятки лет.</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Простой монтаж сложных систем — под углом
            <br /> в пределах 0-90°.</li>
        </ul>
      </div>
     </PageWrapper>
  )
}

export default YagonaPanjaraliOyna1
