import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import arrow from '../Img/Arrow.png'
import PageWrapper from '../Components/PageWrapper';

const TolovShartlari = () => {
  return (
    <PageWrapper>
      <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
        <h2 className='mb-5 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> Условия оплаты
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Условия оплаты</h1>
        <div className='space-y-5 opacity-60 mb-20  text-md sm:text-xl md:text-2xl'>
          <p>В данном блоке Вы можете разместить как ознакомительную статью о предоставляемых Вами услугах, так и полноценный каталог предложений.</p>
          <p>Возможно, будет целесообразно разбить услуги по тематическим категориям.</p>
          <p>Тут могут быть карточки услуг, содержащие подробную информацию об услуге, различные характеристики, иллюстрации, данные о ценах, применяемых скидках и действующих акциях и т.д. с возможностью перехода к странице услуги с подробным описанием и возможностью оформления заказа.</p>
          <h2 className='text-[25px] text-gray-600 font-bold'> Пример наполнения подобного раздела:</h2>
          <p>Наши специалисты всегда рады предложить Вам широкий спектр услуг. В нашем штате работают исключительно высококвалифицированные, опытные сотрудники, готовые сопровождать и направлять Вас.</p>
          <p>В числе предоставляемых услуг Вам могут быть оказаны следующие:</p>
          <p><span className='text-[25px] text-gray-600 font-bold'>• Кредитование и консультация.</span> Наши сотрудники помогут Вам подобрать наиболее выгодные условия кредитования, расскажут обо всех тонкостях и нюансах, а также, при необходимости, помогут собрать все необходимые документы. Кредит можно оперативно оформить прямо у нас в офисе.</p>
          <p><span className='text-[25px] text-gray-600 font-bold'>• Гарантийное обслуживание.</span> На любой наш товар предоставляется как бесплатное гарантийное обслуживание, так и платная послегарантийная поддержка.</p>
          <p><span className='text-[25px] text-gray-600 font-bold'>• Заказ комплектующих, аксессуаров и много другого. </span> В наших магазинах Вы всегда можете оформить заказ на интересующий Вас товар. Даже если искомого товара нет в наличии или вообще в каталоге, Вы всегда можете оставить заявку у наших сотрудников и в ближайшее время получить отклик на свой запрос.</p>
          <p><span className='text-[25px] text-gray-600 font-bold'>• Выкуп и обмен.  </span> Купленная у нас продукция более не удовлетворяет Вашим запросам? Появилось желание приобрести новую? Достаточно просто связаться с нашими профессионалами-оценщиками, сообщить им, что у Вас за товар, в каком он состоянии, какую цену Вы хотите назначить или на что обменять и пр., и наши сотрудники избавят Вас от ненужных хлопот.</p>
        </div>

        <div className="space-y-5">
          <Link to='/YetkazibBerish' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Доставка</span>
            <img className='w-5 h-5 rounded-full ' src={arrow} alt="arrowimg" />
          </Link>
          <Link to='/TolovUsullari' className='bg-[#d9e7fc] w-[450px] flex justify-between items-center px-5 py-3 rounded-lg'>
            <span className=' text-xl opacity-50'>Способы оплаты</span>
            <img className='w-5 h-5 rounded-full' src={arrow} alt="arrowimg" />
          </Link>

        </div>
        <Outlet />
      </div>
    </PageWrapper>

  )
}

export default TolovShartlari
