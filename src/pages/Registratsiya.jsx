import React from 'react'
import { Link } from "react-router-dom";
import wk from "../Img/wk.svg";
import yandexImg from '../Img/yandeximg.webp'
import PageWrapper from '../Components/PageWrapper';


const Registratsiya = () => {
    return (
        <PageWrapper>
            <div className='w-full max-w-base py-16 px-5 mx-auto'>
            <div className='flex flex-col'>
                <div className='flex items-center mb-7'>
                    <Link to='/' className="text-[#79c701] text-[16px]"> <u>Главная</u><span className='mx-1'>/</span></Link>
                    <Link to='/ruxsatbolimi' className="text-[#79c701] text-[16px]"> <u>Авторизация</u><span className='mx-1'>/</span></Link>
                    <p className='text-[#a5a3a3]'>Регистрация</p>
                </div>
                <h3 className='text-[30px] md:text-[50px] font-bold mb-6 md:mb-10'>
                    Регистрация
                </h3>



                <div className=' flex flex-col-reverse md:flex-row items-start md:items-start'>
                    <div className='mr-0 md:mr-36 mb-10 md:mb-0'>
                        <p className='text-sm font-bold opacity-45  mb-2'>E-mail  <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-1 px-4 mb-4 rounded-md border-2' type="email" />
                        <p className='text-sm font-bold opacity-45  mb-2'>Пароль  <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-1 px-4 mb-4 rounded-md border-2' type="password" />
                        <p className='text-sm font-bold opacity-45  mb-2'>Введите пароль повторно <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-1 px-4 mb-4 rounded-md border-2' type="password" />
                        <p className='text-sm font-bold opacity-45  mb-2'>Имя <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-1 px-4 mb-4 rounded-md border-2' type="text" />
                        <p className='text-sm font-bold opacity-45 mb-2'>Телефон <span className='text-red-500 font-bold'>*</span></p>
                        <input className='w-full py-1 px-4 mb-8 rounded-md border-2' type="tel" />
                        <div>
                            <Link className='bg-[#19579e] w-full md:w-auto px-3 py-2 rounded-lg border-2 border-[#19579e] text-white font-bold '>Зарегистрироваться</Link>
                        </div>
                    </div>

                    <div className='pr-0 md:pr-14 text-center md:text-start mb-5 lg:mb-0'>
                        <p className='text-md font-bold mb-3 opacity-60 '>Также вы можете войти через:</p>
                        <button  className='flex items-center justify-between mb-5 bg-[#2787f5] py-2 px-4 rounded-xl text-white'>
                            <img  className=' w-auto h-10 rounded-xl' src={wk} alt="img" />
                            <p>Войти с VK ID</p>
                        </button>
                            <img className='w-[80px] h-10 md:w-auto mr-2 md:mr-5' src={yandexImg} alt="yandexImg" />
                    </div>
                </div>
            </div>
        </div>
        </PageWrapper>
    )
}

export default Registratsiya;
