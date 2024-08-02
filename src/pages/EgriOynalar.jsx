import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const EgriOynalar = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/PlastikOynalar'} className='text-[#79c701]'>Фигурные окна/</Link>Одностворчатое окно
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Фигурные окна</h1>
        <p className=' space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          В современных зданиях, коттеджах, бизнес-центрах все чаще делают фигурные оконные проемы. Пластиковые окна нестандартных форм украшают фасад, красиво выглядят в интерьере. У нас вы можете заказать остекление любых габаритов и конфигураций. Мы изготавливаем фигурные окна из профилей REHAU, дополняем их ламинацией, шпросами, декоративной раскладкой, опциональными стеклопакетами.
        </p>
        <h2 className='font-normal text-[22px] space-y-5 opacity-60 mb-5'>Формы окон:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• круглые, овальные;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• арочные, полуарочные;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• треугольные, трапециевидные;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• крупногабаритные со сложной конфигурацией.</li>
        </ul>
      </div>
    </PageWrapper>

  )
}

export default EgriOynalar
