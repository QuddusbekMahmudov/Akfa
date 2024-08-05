import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const UchOsilganDeraza = () => {
  return (

    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/PlastikOynalar'} className='text-[#79c701]'>Пластиковые окна/</Link>Трехстворчатое окно
        </h2>
        <h1 className=' text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Трехстворчатое окно</h1>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Если в комнату поступает недостаточно света, хочется увеличить обзор из окна или добавить «воздуха»,
          заказывайте панорамное остекление в пол. Французские окна на балконе позволяют обозревать окружающие пейзажи,
          наслаждаясь их видом. С ними дома красиво, тепло и тихо в любой сезон, не беспокоят уличные звуки, пыль, ветер.
        </p>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          В «Оконных технологиях» вы можете заказать французские окна по ценам производителя с доставкой и установкой.
          У нас наиболее доступные цены — мы сотрудничаем с производителями пластиковых профилей, стеклопакетов и фурнитуры
          без посредников, закупаем у них комплектующие крупным оптом.
        </p>
        <h2 className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>Подходят для:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• квартир;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• балконов и лоджий;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• гостиниц, ресторанов;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• коттеджей;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• офисов, бизнес-центров</li>
        </ul>
      </div>

    </PageWrapper>
  )
}

export default UchOsilganDeraza
