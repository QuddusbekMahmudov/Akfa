import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from "axios";
import AOS from 'aos';
import 'aos/dist/aos.css';
import logo from "../Img/logo.png";
import x from "../Img/ximg.png";
import Dropdown from './Dropdown';
import Okompanydropdown from './Okompanydropdown';
import { DrawerMenu } from './DrawerMenu';


const Header = () => {

  // Telegram bot
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false); // New state for checkbox error
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleModal = () => {
    setRotate(true);
    setIsModalOpen(prev => !prev);
    setTimeout(() => setRotate(false), 300);
  };

  const handleName = (event) => {
    setName(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };
  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
    setCheckboxError(false); // Reset error state when checkbox is changed
  };

  const handleSubmitInput = (event) => {
    event.preventDefault();
    const trimmedName = name.trim();
    const trimmedPhone = phone.trim();
  
    if (trimmedName === "" || trimmedPhone === "") {
      alert("Iltimos malumotni to'ldiring");
    } else if (!isCheckboxChecked) {
      setCheckboxError(true); // Show error message if checkbox is not checked
      alert("Iltimos, shaxsiy ma'lumotlaringizni tasdiqlang");
    } else {
      const telegram_bot_id = "7233272711:AAH91LcYfkmAKISHvEZrCQwnisVlVIf7MBE";
      const chat_id = "-1002167792051";
  
      const telegramMessage = `Name: ${name}\nPhone Number: ${phone}`;
  
      axios
        .post(`https://api.telegram.org/bot${telegram_bot_id}/sendMessage`, {
          chat_id,
          text: telegramMessage,
        })
        .then((response) => {
          setName("");
          setPhone("");
          setIsCheckboxChecked(false);
          setCheckboxError(false); //
          alert("Ma'lumot yuborildi!");
        })
        .catch((error) => {
          console.error("Error sending message:", error);
        });
    }
  };
  

  const toggleInfoModal = () => {
    setIsInfoModalOpen(prev => !prev);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
        setIsInfoModalOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
      setIsInfoModalOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <>
      <header className="flex items-center justify-between w-full max-w-base mx-auto py-3 px-5 bg-white">
        <div className='flex items-center space-x-5 '>
          <svg className='hidden  lg:block' width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 53">
            <path d="M19 0C10.234 0 0 5.293 0 20.211c0 14.459 16.554 31.34 17.258 32.051a2.445 2.445 0 0 0 3.49 0c.7-.71 17.257-17.592 17.257-32.051C38 5.3 27.767 0 19 0zm0 46.774C14.892 42.184 4.962 30.068 4.962 20.21c0-14.048 10.745-15.14 14.039-15.14S33.04 6.161 33.04 20.21c0 9.844-9.933 21.973-14.04 26.567zM19 9.3a10.026 10.026 0 1 0 9.811 10.024A9.931 9.931 0 0 0 19 9.3zm0 16.245a6.222 6.222 0 1 1 6.088-6.221A6.163 6.163 0 0 1 19 25.546z" fill="#63b700"></path>
          </svg>
          <p className='text-black opacity-70 text-md font-medium'>Город: Ташкент</p>
        </div>

        {/* Navigation for Desktop */}
        <ul className='hidden xl:flex space-x-6'>
          <li><NavLink className='font-semibold text-[16px] opacity-70' to="/aksiya">Акции</NavLink></li>
          <li><NavLink className='font-semibold text-[16px]' to='okompany'><Okompanydropdown /></NavLink></li>
          <li><NavLink className='font-semibold text-[16px] opacity-70' to="/yangiliklar">Новости</NavLink></li>
          <li><NavLink className='font-semibold text-[16px] opacity-70' to="/kontakt">Контакты</NavLink></li>
        </ul>

        {/* Mobile Menu Button */}
      </header>
      <hr />

      <div className="w-full max-w-base justify-center flex sm:justify-between mx-auto px-5 py-4">
        <NavLink to='/' className="flex flex-col sm:flex-row items-center space-x-4">
          <img className='w-32 h-20' src={logo} alt="logo" />
          <div>
            <h2 className='font-bold text-xl opacity-75 text-center sm:text-start'>AKFA Group Investment</h2>
            <span className='opacity-65'>Окна, остекление балконов, лоджий</span>
          </div>
        </NavLink>

        <div className="hidden lg:flex items-center space-x-5">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M17.7 12.3c-.4-.4-1-.4-1.4 0l-1.6 1.6c-.7-.2-2.1-.7-3-1.6s-1.4-2.3-1.6-3l1.6-1.6c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0L3.6 5c-.4.4-.6.9-.6 1.4 0 1.4.4 6.4 4.3 10.3S16.1 21 17.6 21c.5 0 1-.2 1.4-.6l2.7-2.7c.4-.4.4-1 0-1.4l-4-4zm-.1 6.7c-1.2 0-5.5-.4-8.9-3.7C5.3 11.9 5 7.6 5 6.4l2-2L9.6 7 8.3 8.3c-.2.2-.3.6-.3.9 0 .1.6 2.8 2.3 4.5s4.4 2.2 4.5 2.3c.3.1.7 0 .9-.3l1.3-1.3 2.6 2.6-2 2z" fill="green"></path>
          </svg>
          <div>
            <p className='opacity-70'>Звонок бесплатный:</p>
            <p className='font-semibold text-xl cursor-pointer'>8 (800) 888-88-88</p>
          </div>
          <svg
            onClick={toggleModal}
            className={`transition-transform duration-300 ${rotate ? '-rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            viewBox="0 0 21 11"
          >
            <path d="M0 2.737L10.5 11 21 2.737 17.57 0 10.5 5.564 3.43 0z" fillRule="evenodd"></path>
          </svg>
          <button onClick={toggleInfoModal} className='px-8 py-4 rounded-lg text-white hover:text-black hover:border-[#63b700] border-2 font-semibold hover:bg-white bg-[#63b700] transition-colors duration-300'>
            Заказать звонок
          </button>
        </div>
      </div>


      <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between lg:hidden max-w-base px-5 space-x-5">
        <div className='flex items-center space-x-5 mb-5 md:mb-0'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path d="M17.7 12.3c-.4-.4-1-.4-1.4 0l-1.6 1.6c-.7-.2-2.1-.7-3-1.6s-1.4-2.3-1.6-3l1.6-1.6c.4-.4.4-1 0-1.4l-4-4c-.4-.4-1-.4-1.4 0L3.6 5c-.4.4-.6.9-.6 1.4 0 1.4.4 6.4 4.3 10.3S16.1 21 17.6 21c.5 0 1-.2 1.4-.6l2.7-2.7c.4-.4.4-1 0-1.4l-4-4zm-.1 6.7c-1.2 0-5.5-.4-8.9-3.7C5.3 11.9 5 7.6 5 6.4l2-2L9.6 7 8.3 8.3c-.2.2-.3.6-.3.9 0 .1.6 2.8 2.3 4.5s4.4 2.2 4.5 2.3c.3.1.7 0 .9-.3l1.3-1.3 2.6 2.6-2 2z" fill="green"></path>
          </svg>
          <div>
            <p className='opacity-70'>Звонок бесплатный:</p>
            <p className='font-semibold text-xl cursor-pointer'>8 (800) 888-88-88</p>
          </div>
          <svg
            onClick={toggleModal}
            className={`transition-transform duration-300 ${rotate ? '-rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="11"
            viewBox="0 0 21 11"
          >
            <path d="M0 2.737L10.5 11 21 2.737 17.57 0 10.5 5.564 3.43 0z" fillRule="evenodd"></path>
          </svg>
        </div>
        <button onClick={toggleInfoModal} className='px-8 py-4 rounded-lg text-white hover:text-black hover:border-[#63b700] border-2 font-semibold hover:bg-white bg-[#63b700] transition-colors duration-300'>
          Заказать звонок
        </button>
      </div>

      <section className="bg-[#f7f7f7] w-full hidden xl:block border-y-[1px] mx-auto py-1 px-5 shadow-top-bottom sticky top-0 z-50">
        <Dropdown />
      </section>

      {isModalOpen && (

        <div className={`fixed inset-0 bg-black bg-opacity-50 flex lg:justify-center lg:items-center  justify-center items-start  z-50 transition-opacity duration-300 ${isModalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleOverlayClick}
        >
          <div className={`bg-white w-full max-w-[70%] sm:max-w-[60%] mt-24 md:mt-36 lg:mt-0 lg:max-w-[550px] space-y-3 md:space-y-6 lg:space-y-12 p-4 lg:p-8 px-6 lg:px-10 rounded-lg shadow-lg transition-transform duration-300 ${isModalOpen ? 'scale-100' : 'scale-95'}`}>
            <img className=' rounded-full absolute top-4 right-4 w-12 h-12 cursor-pointer' src={x} alt="Close" onClick={toggleModal} />
            <h2 className=" text-xl md:text-3xl font-bold mb-4">Контактная информация</h2>
            <div>
              <span className='opacity-60'>Режим работы:</span>
              <p>Пн-Вс: <span className='text-black font-semibold text-lg md:text-xl'>Круглосуточно</span></p>
            </div>
            <div>
              <p className='opacity-60'>Звоните по номеру:</p>
              <p className='font-semibold text-xl md:text-2xl'>8 (800) 888-88-88</p>
              <div className="flex">
                <a className='opacity-60 mr-4' href="#"><u>WhatsApp</u></a>
                <a className='opacity-60' href="#"><u><a href="https://t.me/Coder_0913" target="_blank">
                  Telegram
                </a></u></a>
              </div>
            </div>
            <div>
              <p className='opacity-60'>Для писем и предложений</p>
              <a className='text-[#63b700] text-xl' href="#">test@example.com</a>
            </div>
            <div>
              <p className='opacity-60'>Мы находимся по адресу:</p>
              <p>г. Москва, Ленинский проспект, дом, строение, номер <br /> кабинета</p>
            </div>
          </div>
        </div>
      )}

      {isInfoModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex lg:justify-center lg:items-center justify-center items-start z-50 transition-opacity duration-300 ${isInfoModalOpen ? 'opacity-100' : 'opacity-0'}`}
          onClick={handleOverlayClick}
        >
          <div className={`bg-white w-full max-w-[80%] sm:max-w-[60%] mt-24 md:mt-36 lg:mt-0 lg:max-w-[550px] space-y-3 md:space-y-6  p-8 sm:p-10 md:p-20 rounded-lg shadow-lg transition-transform duration-300 ${isInfoModalOpen ? 'scale-100' : 'scale-95'}`}>
            <img className=' rounded-full absolute top-1 right-1 sm:top-4 sm:right-4 w-12 h-12 cursor-pointer' src={x} alt="Close" onClick={toggleInfoModal} />
            <h2 className=" text-md md:text-3xl font-bold text-center">Остались вопросы? Оставьте заявку</h2>
            <span className='opacity-60 text-center inline-block'>и наши специалисты свяжутся с Вами в самое ближайшее время</span>
            <div>
              <form onSubmit={handleSubmitInput} className="space-y-4 mb-5" action="#">
                <input
                  onChange={handleName}
                  value={name}
                  required
                  className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5"
                  type="text"
                  placeholder="Ваше имя"
                />
                <input
                  onChange={handlePhone}
                  value={phone}
                  required
                  className="bg-transparent w-full border-b placeholder-black border-black focus:outline-none pb-5"
                  type="tel"
                  placeholder="+7 (000) 090-99-99"
                />
                <div className="flex justify-between items-start space-x-4 mb-5">
                  <label className="flex items-start space-x-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={isCheckboxChecked}
                      onChange={handleCheckboxChange}
                      className={`form-checkbox h-10 w-10 rounded focus:ring-0 cursor-pointer ${!isCheckboxChecked && checkboxError ? 'border-red-500 text-red-500' : 'border-gray-300'
                        }`}
                    />
                    <p className="opacity-60">
                      Я согласен(а) с обработкой персональных данных и{' '}
                      <Link to="/foydalanishshartlari" target="_blank">
                        <u>политикой конфиденциальности</u>
                      </Link>
                    </p>
                  </label>
                  {checkboxError && <p className="text-red-500 text-sm">Пожалуйста, подтвердите согласие</p>}
                </div>

                <button
                  type="submit"
                  className="sm:py-6 py-3  px-10 sm:px-20 w-full hover:text-black hover:border-[#63b700] border-2 text-white font-semibold hover:bg-white bg-[#63b700] rounded-lg transition-colors duration-300"
                >
                  Оставить заявку
                </button>
              </form>

            </div>
          </div>
        </div>
      )}
      
        <DrawerMenu />

    </>
  );
};

export default Header;
