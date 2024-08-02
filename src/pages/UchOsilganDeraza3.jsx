import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const UchOsilganDeraza3 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Панорамное остеклени
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Панорамное остекление</h1>
        <p className='space-y-5 opacity-60 mb-10 text-md sm:text-xl md:text-2xl'>
          Сделайте пространство дома, квартиры максимально светлым и просторным с помощью остекления балкона панорамными окнами. С ними комната стильно смотрится и хорошо освещена, нет никаких препятствий для обзора. Окна в пол — интересное решение для коттеджей за городом и лоджий в мегаполисе. Они способны украсить любой фасад.
        </p>
        <p className='space-y-5 opacity-60 mb-20 text-md sm:text-xl md:text-2xl'>
          Мы остекляем балконы алюминиевым или пластиковым профилем. Дополняем системы качественной фурнитурой, выполняем отделку, работаем с балконами любых форм и размеров.
        </p>
        <h2 className=' space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>Используем профили:</h2>
        <ul>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• REHAU Grazio</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• REHAU Geneo</li>
          <li className='font-normal text-[20px] space-y-5 opacity-60'>• REHAU Delight</li>
        </ul>
      </div>
    </PageWrapper>
  )
}

export default UchOsilganDeraza3
