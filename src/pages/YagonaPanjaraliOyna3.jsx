import React from 'react'
import { Link } from 'react-router-dom'
import PlastikOynalar from './PlastikOynalar'
import PageWrapper from '../Components/PageWrapper'

const YagonaPanjaraliOyna3 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Холодное остекление
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Холодное остекление</h1>
        <p className=' space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          Алюминиевое остекление мало весит, стоит недорого. Его можно устанавливать на любое основание, как в новостройках, так и в старых хрущевках. Раздвижные створки легко открываются, экономят свободное пространство. Они защищает балкон от влаги, пыли, грязи, сквозняков.
        </p>
        <p className='space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          Мы устанавливаем раздвижные системы PROVEDAL на балконах и лоджиях любых размеров и конфигураций. Изготавливаем холодное остекление из оригинальных профилей, дополняем качественной фурнитурой.
        </p>
        <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl '>Преимущества:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Защита от осадков, пыли, ветра</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Удобное открывание</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• Экономия пространства</li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default YagonaPanjaraliOyna3
