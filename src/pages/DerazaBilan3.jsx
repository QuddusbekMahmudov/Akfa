import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const DerazaBilan3 = () => {
  return (
   <PageWrapper>
       <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Балконный блок
      </h2>
      <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Балконный блок</h1>
     
      <p className='space-y-5 opacity-60 mb-20 text-md sm:text-xl md:text-2xl'>
      Герметичную конструкцию из окна и двери балкона, отделяющую его от жилой комнаты, называют балконным блоком. В его основе — металлопластиковый каркас со стеклянным заполнением. Бывают варианты со стеклянной дверью или с непрозрачным наполнением, в конструкцию можно установить опциональный стеклопакет с солнцезащитным, противоударным или самоочищающимся стеклом. Такое решение обычно дешевле. В нашей компании вы можете заказать блок с установкой под ключ, изготовленный из профиля REHAU.
      </p>
      <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Виды комбинаций:</h2>
      <ul>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• дверная и оконная створки;</li>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• дверь+2 окна;</li>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• дверь с перегородкой из стекла;</li>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• две дверные + одна оконная створка.</li>
      </ul>
    </div>
   
   </PageWrapper>
  )
}

export default DerazaBilan3
