import React from 'react';
import { Link } from 'react-router-dom';
import watsdap from "../Img/watsap.svg";
import telegram from "../Img/telegram.svg";
import wk from "../Img/wk.svg";
import ok from "../Img/ok.svg";
import ru from "../Img/ru.svg";

const Kontakt = () => {
    return (
        <div className='w-full max-w-base mx-auto px-5 py-10'>
            <h2 className='mb-5 opacity-60'>
                <Link to='/' className='text-[#79c701]'>Главная/</Link>Контакты
            </h2>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-16'>Контакты</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-5 lg:gap-10">
                <div className='w-full max-w-[448px] space-y-5'>
                    <div className='flex justify-start space-x-4 items-center'>
                        <Link className='text-2xl font-bold opacity-60'>+7 (000) 000-00-00</Link>
                        <img className='w-10 h-10' src={watsdap} alt="WhatsApp" />
                        <a href="https://t.me/Coder_0913" target="_blank">
                            <img className='w-10 h-10' src={telegram} alt="Telegram" />
                        </a>


                    </div>
                    <p className='text-xl opacity-60'>Пн—Пт с 11:00 до 21:00</p>
                    <p className='text-xl opacity-60'>Сб—Вс Выходной</p>
                    <p className='text-xl opacity-60'>г. Москва, ул. Ленинская, дом 0, корп 0, офис 0</p>
                    <a className='text-2xl text-[#4285f5] inline-block mt-5' href="mailto:mail@company.ru">mail@company.ru</a>
                    <p className='text-xl opacity-60'>ИНН 000000000 ОГРН 000000000</p>
                    <div className="flex space-x-2">
                        <img className='rounded-lg w-12' src={wk} alt="VK" />
                        <img className='rounded-lg w-12' src={ok} alt="OK" />
                        <img className='rounded-lg w-12' src={ru} alt="RU" />
                    </div>
                </div>

                <div className='col-span-2 relative bg-gray-300' style={{ height: '450px' }}>
                    <div className='absolute inset-0'>
                        <a
                            href="https://yandex.com/maps?utm_medium=mapframe&utm_source=maps"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '0px', left: '0px' }}
                        >
                            Yandex Maps
                        </a>
                        <a
                            href="https://yandex.com/maps/geo/moskva/53000094/?ll=37.385439%2C55.584227&utm_medium=mapframe&utm_source=maps&z=9.13"
                            style={{ color: '#eee', fontSize: '12px', position: 'absolute', top: '14px', left: '0px' }}
                        >
                            Moscow — Yandex Maps
                        </a>
                        <iframe
                            src="https://yandex.com/map-widget/v1/?ll=37.385439%2C55.584227&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzAwMDA5NBIa0KDQvtGB0YHQuNGPLCDQnNC-0YHQutCy0LAiCg2GeBZCFQEGX0I%2C&z=9.13"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen={true}
                            style={{ border: '0', height: '100%' }}
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Kontakt;
