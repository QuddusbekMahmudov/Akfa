import React from 'react'
import { Link } from 'react-router-dom'

const Tashkiletilgansana = () => {
    return (
        <>
            <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
                <h2 className=' text-2xl sm:text-3xl md:text-5xl font-bold md:16 sm:mb-10 mb-5'>Производственная компания была<br /> образована в июле 2011 года</h2>
                <p className='font-normal text-lg space-y-5 opacity-60 mb-10'>
                    Лучшее качества окон с максимально выгодными условиями покупки
                </p>
                <h3 className='text-[23px] font-bold mb-8'>Безупречный сервис – фирменный почерк компании</h3>
                <p className='space-y-5 mb-10 opacity-70 text-md sm:text-lg'>
                    Мы обеспечиваем ежедневный режим работы. Квалифицированные менеджеры всегда готовы предоставить консультационную помощь и дать ответы на любые возникающие вопросы.
                </p>
                <Link to='/kamanda' >
                    <span className="border-b-[1px] w-full border-b-black text-black/60 pb-4">читать подробнее</span>
                </Link>

            </div>
        </>


    )
}

export default Tashkiletilgansana
