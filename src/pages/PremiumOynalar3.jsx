import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const PremiumOynalar3 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/BalkonVaLojiklar'} className='text-[#79c701]'>Балконы и лоджии/</Link>Утепление балконов
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Утепление балконов</h1>
        <h3 className='sm:text-2xl text-lg text-gray-500 font-bold mb-8'>Отопление на балконе</h3>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Чтобы сделать помещение жилым, необходимо утеплить пол, потолок, стены, установить отопительные приборы. Чаще всего у нас заказывают монтаж батареи отопления. Также мы настилаем теплый пол под финишное покрытие, используя сетчатые маты. Монтируем инфракрасные элементы, нагревающие предметы поблизости.
        </p>
        <h3 className='text-[23px] text-gray-500 font-bold mb-8'>Утепление стен</h3>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Балконные стены обшиваются материалом на выбор: пенопласт, пенофол, «Пеноплэкс». На стоимость влияет вид утеплителя, толщина слоя, состояние покрытия.
        </p>
        <h3 className='text-[23px] text-gray-500 font-bold mb-8'>Утепление пола</h3>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Под ламинат, линолеум укладывается утеплитель в один или несколько слоев. Самый теплый вариант — монтаж инфракрасных полов с подогревом.
        </p>
        <h3 className='text-[23px] text-gray-500 font-bold mb-8'>Утепление потолка</h3>
        <p className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          Перед отделкой потолков может потребоваться выравнивание основания, отделка стыков. Поверх этого укладывают минеральную вату или другой теплоизолятор.
        </p>

      </div>
    </PageWrapper>


  )
}

export default PremiumOynalar3
