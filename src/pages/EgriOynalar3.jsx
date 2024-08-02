import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const EgriOynalar3 = () => {
  return (

    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Ремонт балкона
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Ремонт балкона</h1>
        <p className='space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          Старый балкон требует обновления или вы заехали в новую квартиру с незастекленной лоджией? Закажите ремонт балкона в нашей компании. Мы ремонтируем лоджии, остекляем и утепляем их, выполняем внутреннюю и внешнюю отделку. Остекление изготавливаем из теплого пластикового профиля REHAU или алюминиевых систем PROVEDAL, ALUTECH.
        </p>

      </div>
    </PageWrapper>

  )
}

export default EgriOynalar3
