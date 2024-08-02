import React from 'react'
import { Link } from 'react-router-dom'
import PageWrapper from '../Components/PageWrapper'

const BloguchunMaqola = () => {
    return (
        <PageWrapper>
            <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
                <h2 className='mb-10 opacity-60'>
                    <Link to='/' className='text-[#79c701]'>Главная/</Link>Оптимизация статьи для блога
                </h2>
                <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Оптимизация статьи для блога</h1>
                <time className='opacity-65 mb-5 inline-block' datetime="01.03.2022">Дата публикации: 01.03.2022</time>
                <div className="space-y-5">
                <p className=' text-md space-y-5 opacity-60 mb-10'>Почему этот пункт идет вторым? Потому что после сбора информации необходимо начать подготовку к оптимизации статьи. И начинать надо с подбора ключа для статьи. Помните о том, что для статьи подбирается только одно ключевое слово. Но подобрать его необходимо четко по теме.
                </p>
                <p><span className='font-bold text-lg opacity-60'>Подбор делается на ресурсах Яндекса и Google</span> <span className=' text-md opacity-60'>Как это делается сейчас обсуждать не будем. Напомню только что обязательно используйте операторы при подборе ключевого слова.</span></p>
                <p className='text-md opacity-60'>Еще один момент. Часто молодые блогеры используют ключи высокочастотные. Это означает, что ваша статья будет конкурировать с популярными и “тяжелыми” ресурсами. На первых этапах такая игра будет не в пользу молодого блога. Поэтому пишите статьи под низкочастотники. С их использованием продвижение вашего блога будет идти успешнее.</p>
                <p className=' text-md opacity-60'>Разбавляйте ключевой запрос в тексте. То есть не перестарайтесь с их количеством в прямом вхождении. Например, если ключ статьи “трубы пвх”, то в тексте можно использовать “трубы водопроводные пвх”.</p>
                <p><span className='font-bold text-lg opacity-60'>  Объем статьи</span><span className=' text-md opacity-60'>  на сегодняшний день поисковиками приветствуется до 800 слов. Минимальное количество – 300 слов. Такая цифра обычно заложена в SEO плагины. Не надо искусственно увеличивать объем. Лучше проведите дополнительную работу и подберите материал. При пустом увеличении объема статьи увеличивается ее водность,</span> <span className='font-bold text-lg opacity-60'>«не лейте воды». «Вода» очень  снижает релевантность,</span> <span className=' text-md opacity-60'>что ведет к снижению оценки текста поисковиками.</span></p>
                </div>

            </div>
        </PageWrapper>
    )
}

export default BloguchunMaqola