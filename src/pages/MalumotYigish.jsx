import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const MalumotYigish = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-24">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link>Сбор информации
        </h2>
        <h3 className=' text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Сбор информации</h3>
        <time className='inline-block mb-5 opacity-60' datetime=" 08.07.2022">Дата публикации: 08.07.2022</time>
        <p className=' text-lg space-y-5 opacity-60 '>В любом случае, каким бы экспертом в данной теме вы не были, желательно ознакомиться с материалами других авторов. Никогда не останавливайтесь на одном ресурсе. Желательно изучить информацию нескольких авторов и многие источники. По возможности опирайтесь на факты. Это может занять не один день. Но лучше тщательно подготовиться, чем позже краснеть за публикацию.
        </p>
      
      </div>
    </PageWrapper>
  )
}

export default MalumotYigish
