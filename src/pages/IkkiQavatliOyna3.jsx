import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const IkkiQavatliOyna3 = () => {
  return (

    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Теплое остекление
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Теплое остекление</h1>
        <p className='space-y-5 opacity-60 mb-20 text-md sm:text-xl md:text-2xl'>
          При теплом остеклении на балконе сохраняется комфортная температура в любое время года. Многокамерные пластиковые профили изолируют холод и шум со стороны улицы. Для максимальной теплоизоляции их дополняют двухкамерными или энергосберегающими стеклопакетами. Мы изготавливаем окна из оригинального немецкого профиля REHAU. Остекляем балконы любых форм и размеров, выполняем отделку откосов. Устанавливаем распашные, поворотно-раздвижные створки.
        </p>
        <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Преимущества:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Максимальная тепло- и звукоизоляция</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Защита от осадков, пыли, сквозняков</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Стандартные или фигурные конфигурации</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Ламинация с одной или двух сторон</li>
        </ul>
      </div>

    </PageWrapper>
  )
}

export default IkkiQavatliOyna3
