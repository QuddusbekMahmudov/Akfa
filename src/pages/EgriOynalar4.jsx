import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const EgriOynalar4 = () => {
  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/ObektlarVaXizmatKorsatish'} className='text-[#79c701]'>Услуги и сервис/</Link>Скрытые петли
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Скрытые петли</h1>
        <p className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>
          Типовые оконные петли выглядят громоздко и порой «отягощают» дизайн помещения. В ответ на потребительский спрос производители стали выпускать скрытые петли для окон. Они делают интерьер более лаконичным, стильным, удачно сочетаются с любым дизайном. Скрытую фурнитуру не видно в проеме, хотя она выполняет все необходимые функции. С ней створка открывается на угол до 100 градусов и ограничена по весу. Можно использовать скрытые петли для пластиковых окон из любого профиля.
        </p>

      </div>
    </PageWrapper>
  )
}

export default EgriOynalar4
