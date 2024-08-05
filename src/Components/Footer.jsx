import React, { useEffect } from 'react';
import AOS from 'aos';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css';
import c from "../Img/cberbank.svg";
import m from "../Img/mir.svg";
import n from "../Img/n.svg";
import q from "../Img/q.svg";
import a from "../Img/a.svg";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Animatsiya davomiyligi
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className='bg-[#f7f7f7]' >
      <div className='w-full max-w-base mx-auto px-5 py-10 ' data-aos="fade-up">
        <h2 className='text-xl sm:text-2xl font-semibold lg:mb-0 mb-5 sm:text-start text-center'>Контактная информация</h2>
        <p className='opacity-70 sm:text-start text-center'>Свяжитесь с нами удобным для Вас способом</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ]lg:gap-6 my-10 lg:my-20 text-lg sm:text-start text-center">
          <ul>
            <li className='opacity-65'>Режим работы:</li>
            <li>Пн-Пт: с 09:00 до 17:00</li>
            <li>Суббота: с 11:00 до 15:00</li>
          </ul>
          <ul>
            <li className='opacity-65'>Звонок бесплатный:</li>
            <li className='text-2xl'>8 (800) 888-88-88</li>
            <li className='opacity-65'>WhatsApp,
            <a href="https://t.me/Coder_0913" target="_blank">
            Telegram
             </a>
            </li>
          </ul>
          <div>
            <p className='opacity-65'>Подписывайтесь в соц сетях:</p>
            <ul className=' opacity-60 flex justify-center sm:justify-start space-x-4 '>
              <li className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" data-prefix="itqrqc1c6"><path fill="none" d="M0 0h100v100H0z"></path><path d="M50.66 73.591a23.931 23.931 0 0 1-11.76-3.074l-13.649 4.4 4.524-13.441A24.078 24.078 0 1 1 50.66 73.591zm0-44.317a20.191 20.191 0 0 0-18.535 28.057 28.549 28.549 0 0 0 1.975 3.541l-2.69 8.089 8.1-2.642a20.261 20.261 0 0 0 3.28 1.7 20.166 20.166 0 1 0 7.87-38.745zm-.744 28.9a22.174 22.174 0 0 1-4.016-3.027.011.011 0 0 1-.014-.009h-.011v-.013a22.066 22.066 0 0 1-3.525-3.6c-5.475-6.654-2.937-10.855-2.211-11.684.837-.966 3.558-1.3 3.614-.818s2.847 5.63 2.9 6.1-1.47 2.228-1.916 2.74 3.5 4.418 3.566 4.482c.082.065 4.472 3.465 4.911 2.966s1.969-2.253 2.444-2.266 5.947 2.087 6.423 2.074.515 2.737-.333 3.706c-.715.836-4.533 3.92-11.832-.647z" fill-rule="evenodd" class="path-ill8i3hbj"></path></svg>
              </li>
              <li className='cursor-pointer'>
              <a href="https://t.me/Coder_0913" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" data-prefix="imzx9c4er"><path data-name="Rectangle 1 copy 15" fill="none" d="M0 0h100v100H0z"></path><path d="M71.45 28.908L26.63 45.895c-2.45.709-2.38 3.132-.56 3.715l11.23 3.509 4.29 13.187c.53 1.443.95 1.987 1.85 2 .93.013 1.29-.33 2.27-1.192 1.14-1.072 2.87-2.758 5.62-5.429l11.68 8.639c2.15 1.187 3.7.572 4.23-2l7.33-36.262c.78-3.149-1.07-4.089-3.12-3.154zM39.06 52.313l25.53-16.035c1.26-.844 1.65.1 1.09.749l-21.19 19.08-1.09 9.523z" fill-rule="evenodd" class="path-iy9p6hrzo"></path></svg>
             </a>
              </li>
              <li className='cursor-pointer'>
              <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 100 100" data-prefix="iuntjzuiw"><path data-name="Rectangle 1 copy 12" fill="none" d="M0 0h100v100H0z"></path><path d="M49.22 64.024h2.98a2.531 2.531 0 0 0 1.37-.6 2.223 2.223 0 0 0 .41-1.315s-.06-4.016 1.8-4.608c1.84-.583 4.19 3.882 6.69 5.6a4.725 4.725 0 0 0 3.32 1.014l6.68-.093s3.49-.216 1.84-2.966c-.14-.225-.97-2.035-4.97-5.754-4.19-3.892-3.62-3.262 1.42-10 3.07-4.1 4.3-6.6 3.92-7.675-.37-1.021-2.63-.752-2.63-.752l-7.52.047a1.7 1.7 0 0 0-.97.171 2.124 2.124 0 0 0-.66.808 43.441 43.441 0 0 1-2.78 5.871c-3.35 5.693-4.69 5.995-5.23 5.641-1.28-.825-.96-3.31-.96-5.076 0-5.518.84-7.819-1.63-8.414a12.768 12.768 0 0 0-3.51-.35c-2.68-.027-4.95.008-6.23.64-.86.419-1.52 1.354-1.12 1.408a3.372 3.372 0 0 1 2.22 1.117 7.317 7.317 0 0 1 .75 3.407s.44 6.5-1.04 7.3c-1.01.553-2.4-.576-5.39-5.742a47.522 47.522 0 0 1-2.68-5.57 2.206 2.206 0 0 0-.62-.839 3.1 3.1 0 0 0-1.16-.467l-7.14.047a2.452 2.452 0 0 0-1.47.5 1.553 1.553 0 0 0-.02 1.274s5.59 13.106 11.92 19.711c5.81 6.056 12.41 5.659 12.41 5.659z" fill-rule="evenodd" class="path-iumb9mg2o"></path></svg>
              </li>
            </ul>
          </div>
          <ul>
            <li className='opacity-65'>Мы  находимся по адресу:</li>
            <li>г. Москва, Ленинский проспект, дом, строение, номер кабинета</li>
          </ul>
          <ul>
            <li className='opacity-65'>Для писем и предложений::</li>
            <li>
              <a className='text-green-600 font-medium' href="mailto:test@example.com">test@example.com</a>
            </li>
          </ul>
            <p className='opacity-65'>Все материалы, находящиеся на сайте, охраняются в соответствии с законодательством, в том числе, об авторском праве и смежных правах.</p>
        </div>
      </div>
      <hr />
      <div className='w-full max-w-[1450px] mx-auto px-5 my-8 flex flex-col lg:flex-row lg:justify-between'>
        <div className='lg:mb-0 mb-10 '>
          <p className='opacity-65 mb-5 sm:text-start text-center'>Оплачивайте удобно:</p>
          <ul className='flex justify-center sm:justify-start items-center space-x-8'>
            <li><img className='w-8 h-8' src={c} alt="cberbank" /></li>
            <li><img className='w-8 h-8' src={m} alt="mir" /></li>
            <li><img className='w-8 h-8' src={a} alt="a" /></li>
            <li><img className='w-8 h-8' src={q} alt="q" /></li>
            <li><img className='w-8 h-8' src={n} alt="n" /></li>
          </ul>
        </div>
        <button className='mx-auto sm:mx-0 border-2 w-16 h-16 rounded-full hover:bg-[#63b700] flex justify-center items-center'
          onClick={scrollToTop}
        >
          <svg className='opacity-60' xmlns="http://www.w3.org/2000/svg" width="20" height="26" viewBox="0 0 26 32.969">
            <path d="M12.565.069a1.2 1.2 0 0 1 .865 0 213.326 213.326 0 0 0 .291.151l11.775 9.7a1.264 1.264 0 0 1 .272 1.746 1.216 1.216 0 0 1-1.719.276l-9.821-8.254v28.028a1.231 1.231 0 1 1-2.462 0V3.688l-9.821 8.254a1.216 1.216 0 0 1-1.719-.276A1.264 1.264 0 0 1 .498 9.92L12.273.22a1.194 1.194 0 0 1 .156-.081 1.16 1.16 0 0 1 .136-.07z" fillRule="evenodd" />
          </svg>
        </button>
      </div>
      <hr />
      <div className='w-full max-w-[1450px] mx-auto px-5 my-8 flex flex-col sm:flex-row items-center sm:justify-between sm:items-center'>
        <p>Copyright © 2022 - AKFA Group Investment</p>
        <p>Поддержка. <u> <a href='https://megagroup.ru/?utm_referrer=mos-window.oml.ru' target="_blank" rel="noopener noreferrer" > Разработка сайтов</a></u> в Megagroup..</p>
      </div>
    </div>
  );
};

export default Footer;
