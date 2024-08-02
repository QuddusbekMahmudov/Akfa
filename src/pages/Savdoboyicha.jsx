import React from 'react'
import { Link } from 'react-router-dom';
import PageWrapper from '../Components/PageWrapper';

const Savdoboyicha = () => {
    return (
        <PageWrapper>
            <div className='w-full max-w-base mx-auto px-5 py-10 sm:py-20'>
                <h2 className='mb-5 opacity-60'>
                    <Link to='/' className='text-[#79c701]'>Главная   /</Link> <Link to='/yangiliklar' className='text-[#79c701]'>Новости    /</Link><Link to='/tashrifbuyuruvchilar' className='text-[#79c701]' >Для посетителей   /</Link>
                   Советы покупателям
                </h2>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>
                   Советы покупателям
                </h1>


                <div className='w-full max-w-[1450px] mx-auto py-5 '>
                    <date className='opacity-60' datetime="2020-02-04"> Дата публикации:04.02.2020</date>
                    <div className="space-y-5 mt-5">
                        <p className=' opacity-70'>В данном разделе мы рекомендуем Вам размещать новостные, информационные, справочные и иные статьи, так или иначе связанные с работой Вашей компании.</p>
                        <p className=' opacity-70'>Вы можете задать способ отображения новостей в ленте: анонс (со ссылкой на полный текст) или новости целиком. Помимо этого, доступны настройки сортировки, количества новостей на странице и формата изображений, прикрепленных к новостям.</p>
                        <span className='opacity-60 mt-5 inline-block font-bold italic'>Пример новости:</span>
                        <p className='opacity-70'>Приветствуем Вас на сайте нашей компании. Теперь, помимо сети филиалов по всему городу, у нас есть и небольшое Интернет-представительство, где Вы всегда можете ознакомиться с перечнем предоставляемой продукции, а также действующих акций и скидок, подобрать и оформить заказ, получить любую справочную и контактную информацию и просто всегда быть в курсе последних новостей нашей фирмы.</p>
                        <p className=' opacity-70'>А пока предлагаем Вам ознакомиться с нашей продукцией, услугами и прайс-листами.</p>
                    </div>

                </div>

            </div>
        </PageWrapper>
    )
}

export default Savdoboyicha;

