import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const DerazaBilan = () => {
  return (
   <PageWrapper>
     <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
      <h2 className='mb-10 opacity-60'>
        <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/PlastikOynalar'} className='text-[#79c701]'>Пластиковые окна/</Link>Окна с форточкой
      </h2>
      <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Окна с форточкой</h1>

      <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
        Пластиковые окна с форточкой удобно проветривать. При этом не нужно убирать вещи с подоконника, отодвигать горшки с цветами. Для многих такая конструкция привычнее и безопаснее, особенно если рядом с проемом находятся маленькие дети. Форточные створки практичны на кухне, они помогают проветривать комнату во время приготовления пищи и понижать температуру внутри.
      </p>
      <h2 className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Режимы открывания форточки:</h2>
      <ul>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• распашной;</li>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• откидной;</li>
        <li className='font-normal text-[20px] space-y-5 opacity-60'>• микропроветривание.</li>
      </ul>
    </div>
   </PageWrapper>

  )
}

export default DerazaBilan
