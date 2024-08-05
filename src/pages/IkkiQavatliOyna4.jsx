import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const IkkiQavatliOyna3 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/ObektlarVaXizmatKorsatish'} className='text-[#79c701]'>Услуги и сервис/</Link>Остекление квартир
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Остекление квартир</h1>
        <p className='font-normal text-[22px] space-y-5 opacity-60 mb-20'>
          В остекление входят изготовление, установка пластиковых окон из профиля REHAU, отделка откосов. Полный комплекс работ выполняется в течение нескольких дней после оформления заявки. Устанавливаем окна, балконные блоки в домах любого типа.
        </p>
        <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Преимущества пластиковых окон:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• легкость ухода;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• надежная фурнитура;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• стандартные и нестандартные конфигурации;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• ламинация с одной или двух сторон;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• долгий срок службы.</li>
        </ul>
      </div>
    </PageWrapper>

  )
}

export default IkkiQavatliOyna3
