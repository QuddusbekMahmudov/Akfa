import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const IkkiQavatliOyna1 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/Profillar'} className='text-[#79c701]'>Профили/</Link>Rehau Grazio
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Rehau Grazio</h1>
        <p className='space-y-5 opacity-60 mb-20 text-md sm:text-xl md:text-2xl'>
          Под брендом выпускаются «теплые» и «холодные» профильные системы из алюминия. Мы изготавливаем окна и двери ALUVET под заказ, по индивидуальным размерам. Оснащаем системы одно- или двухкамерными стеклопакетами, запорной фурнитурой, аксессуарами. Обслуживаем объекты в Москве и Московской области.
        </p>
        <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Преимущества:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Надежность. Системы ALUVET рассчитаны на 40 и более лет службы. Поверхность обладает исключительной стойкостью к механическим повреждениям и деформации.</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Безопасность. Высокая взломоустойчивость, фурнитуры высшего качества, предназначенная для интенсивной эксплуатации. Максимальный вес створок — 130 кг.</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Минимум эксплуатационных затрат — конструкции из алюминиевых профилей ALUVET практически не ломаются.
            Эффектный дизайн — возможна покраска по порошковой технологии, анодное оксидирование.</li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default IkkiQavatliOyna1
