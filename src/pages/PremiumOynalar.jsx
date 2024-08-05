import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const PremiumOynalar = () => {
  return (

    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/PlastikOynalar'} className='text-[#79c701]'>Пластиковые окна/</Link>Окна премиум-класса
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Окна премиум-класса</h1>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Элитное остекление — гарантия максимального комфорта и отражение статуса домочадцев. Премиальные пластиковые окна выглядят эффектней стандартных аналогов, сконструированы иначе и стоят дороже.
        </p>
        <h2 className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>Преимущества:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• высокая теплоизоляция;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• блокировка уличного шума;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• защита от сквозняков;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• взломостойкая фурнитура;</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• оформление под дизайн интерьера и фасада.</li>
        </ul>
      </div>

    </PageWrapper>
  )
}

export default PremiumOynalar
