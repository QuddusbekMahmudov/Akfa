import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const UchOsilganDeraza4 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/ObektlarVaXizmatKorsatish'} className='text-[#79c701]'>Услуги и сервис/</Link>Остекление коттеджей
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Остекление коттеджей</h1>
        <p className='space-y-5 opacity-60 mb-10  text-md sm:text-xl md:text-2xl'>
          Наша компания выполняет остекление коттеджей под ключ пластиковыми и алюминиевыми профилями разных типов. Изготавливаем и устанавливаем конструкции любых форм и размеров. Все работы выполняются в течение нескольких дней после оформления заявки.
        </p>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Мы являемся официальным партнером концерна REHAU, закупаем оригинальные профили и комплектующие, изготавливаем окна и двери на собственном производстве. Даем гарантии на готовые конструкции и выполненные работы.
        </p>
        <h2 className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>Варианты оформления:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• панорамные конструкции;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• ламинация под дерево;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• разные формы и размеры.</li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default UchOsilganDeraza4
