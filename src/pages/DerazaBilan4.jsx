import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const DerazaBilan4 = () => {
  return (
     <PageWrapper>
       <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/ObektlarVaXizmatKorsatish'} className='text-[#79c701]'>Услуги и сервис/</Link>
          Ремонт окон
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>
          Ремонт окон</h1>

        <p className='space-y-5 opacity-60 mb-5 text-md sm:text-xl md:text-2xl'>
          У нас крупное производство профильных систем, в штате работают высококвалифицированные специалисты. Они ремонтируют изделия из ПВХ, алюминия, дерева, выполняют отделку оконных проемов. Мастера восстанавливают функциональность профилей REHAU, Veka, KBE, Kaleva, Provedal, Salamander, Wintech. Вызывайте мастера по ремонту окон на объекты в Москве и области, чтобы отрегулировать створки, поменять детали оконного блока, сделать остекление герметичным, устранить конденсат.
        </p>
      </div>
     </PageWrapper>

  )
}

export default DerazaBilan4
