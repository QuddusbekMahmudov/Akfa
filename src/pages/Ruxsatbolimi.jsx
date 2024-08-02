import React from 'react';
import { Link } from "react-router-dom";
import wk from "../Img/wk.svg";
import yandexImg from '../Img/yandeximg.webp';
import PageWrapper from '../Components/PageWrapper';

const Ruxsatbolimi = () => {
    return (
        <PageWrapper>
            <div className='w-full max-w-base py-24 px-5 md:px-10 mx-auto'>
                <div className='flex items-center mb-4 md:mb-0 space-x-2'>
                    <Link to='/' className="text-[#79c701] text-[16px]">
                        <u>Главная / </u>
                    </Link>
                    <Link to='/registratsiya' className="text-[#79c701] text-[16px]">
                        <u>Регистрация /</u>
                    </Link>
                    <p className='text-[#a5a3a3] md:self-end'>Авторизация</p>
                </div>

                <h3 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6'>
                    Авторизация
                </h3>

                <div className='border-[1px] rounded-lg py-4 md:py-5 px-3 md:px-5'>
                    <p className='text-[16px] md:text-[18px] font-bold mb-1 opacity-60'>E-mail:</p>
                    <div className='flex flex-col md:flex-row items-start md:justify-between'>
                        <div className="mb-4 md:mb-0 md:mr-4">
                            <input className='w-full md:w-[350px] lg:w-[700px] border-2 py-1 px-2 border-black/40 rounded-md shadow-lg mb-4' type="email" placeholder='sample@domain.ru' />
                            <div>
                                <div className="flex flex-col">
                                    <p className='text-[16px] opacity-60 font-bold'>Пароль:</p>
                                    <Link className='text-[16px] text-[#79c701] mb-2'>Забыли пароль?</Link>
                                </div>
                                <input className='w-full md:w-[350px] lg:w-[700px] py-1 border-2 border-black/40 px-2 rounded-md shadow-lg mb-4' type="password" placeholder='*********' />
                                <div className='flex flex-col lg:flex-row items-center lg:justify-between'>
                                    <Link to={'/SignIn'} className='bg-[#1d63a5] w-full lg:w-[500px] text-center py-2 rounded-lg text-white font-bold mb-2 lg:mb-0'>Вход</Link>
                                    <Link to='/registratsiya' className='bg-white w-full lg:w-[180px] text-center py-[6px] rounded-lg border-2 border-[#19579e] text-[#19579e] font-bold hover:bg-[#19579e] hover:text-white duration-500'>Регистрация</Link>
                                </div>
                            </div>
                        </div>

                        <div className='mr-0 md:mr-4 lg:mr-56'>
                            <p className='text-md font-bold mb-3 opacity-65'>Также вы можете войти через:</p>
                            <button className='flex items-center justify-between mb-5 bg-[#2787f5] py-2 px-4 rounded-lg text-white'>
                                <img className='w-16 h-10 ' src={wk} alt="img" />
                                <p className='font-semibold'>Войти с VK ID</p>
                            </button>
                            <img className=' h-10 md:w-auto mr-2 md:mr-5' src={yandexImg} alt="yandexImg" />
                            <p className='text-[14px] md:text-[16px]'>При входе и регистрации вы<br /> принимаете 
                            <Link className='text-[#6cd16c] text-[14px] md:text-[16px] hover:underline' to='/foydalanishshartlari' target="_blank">
                                <u>пользовательское <br />соглашение</u>
                            </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageWrapper>
    );
}

export default Ruxsatbolimi;
