import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import opaxon from "../Img/Opaxon.webp";
import ayiqcha from "../Img/Ayiqcha.webp";
import arrow from "../Img/arrowr.png";

const HomeHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeChange = (current, next) => {
    setCurrentSlide(next);
  };

  const CustomNextArrow = ({ onClick }) => (
    <div
      className="w-12 h-12 bg-white rounded-full absolute top-1/2 right-[-70px] flex items-center justify-center opacity-0 group-hover:right-[40px] group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-[#63b700]"
      onClick={onClick}
    >
      <img className="w-5 h-5" src={arrow} alt="Next" />
    </div>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <div
      className="w-12 h-12 bg-white rounded-full absolute top-1/2 left-[-70px] flex items-center justify-center opacity-0 group-hover:left-[40px] group-hover:opacity-100 transition-all duration-300 z-10 hover:bg-[#63b700]"
      onClick={onClick}
    >
      <img className="w-5 h-5 rotate-180" src={arrow} alt="Prev" />
    </div>
  );

  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    adaptiveHeight: true,
    beforeChange: handleBeforeChange,
    dots: true,
    appendDots: (dots) => (
      <div style={{ position: 'absolute', bottom: '10px', width: '100%' }}>
        <ul className="flex justify-center">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "10px",
          height: "10px",
          backgroundColor: currentSlide === i ? "#79c701" : "white",
          border: "1px white solid",
          borderRadius: "50%",
          margin: "0 5px",
          cursor: "pointer",
        }}
      />
    ),
  };

  return (
    <div className="w-full max-w-base mx-auto flex flex-col xl:flex-row lg:justify-between items-center py-12 px-5">
      <div className="w-full xl:mr-6 xl:mb-0 mb-5">
        <div className="bg-white">
          <div className="w-full max-w-full xl:max-w-[1000px] mx-auto group">
            <Slider {...settings}>
              <div className="relative">
                <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl" src={opaxon} alt="Opaxon" />
                <div className="absolute inset-0 bg-black opacity-20 rounded-xl"></div>
                <div
                  data-aos="fade-up"
                  className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 md:items-start md:ml-20"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[30px] md:leading-[46px] break-words text-center md:text-left">
                    Остекление балконов со<br /> скидкой 30%
                  </h3>
                  <Link to="/IkkiQavatliOyna3" className="flex text-lg leading-[25px] font-medium mt-5">
                    При заказе комплексной услуги под ключ
                  </Link>
                </div>
              </div>

              <div className="relative">
                <img className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-2xl" src={ayiqcha} alt="Ayiqcha" />
                <div className="absolute inset-0 bg-black opacity-20 rounded-2xl"></div>
                <div
                  data-aos="fade-up"
                  className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 md:items-start md:ml-20"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-[30px] md:leading-[46px] break-words text-center md:text-left">
                    <span>Сделаем всё под ключ:</span>
                  </h3>
                  <Link to="/YagonaPanjaraliOyna4" className="text-lg leading-[25px] font-medium mt-5">
                    от производства до установки за 5 дней
                  </Link>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>

      <div className="bg-[#63b700] p-10 rounded-lg space-y-2 w-full mx-auto text-center max-w-full lg:text-start xl:max-w-[400px] justify-center items-center">
        <h3 className="text-2xl md:text-3xl font-bold text-white">
          Хотите записаться на замер?
        </h3>
        <p className="text-white/70 text-[16px] md:text-[19px]">
          Оставьте заявку и мы перезвоним Вам в течении 10 минут
        </p>
        <form className="space-y-5" action="#">
          <input
            className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5"
            type="text"
            placeholder="Ваше имя"
          />
          <input
            className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5"
            type="tel"
            placeholder="+7 (000) 090-99-99"
          />
        </form>
        <div className="flex justify-start items-start space-x-2">
          <label className="flex items-start space-x-2">
            <input
              type="checkbox"
              className="form-checkbox h-6 w-6 bg-black border-gray-300 rounded cursor-pointer"
            />
            <p className="opacity-60 text-white text-sm md:text-base">
              Я согласен(а) с обработкой персональных данных и{' '}
              <Link to="/foydalanishshartlari" target="_blank">
                <u>политикой конфиденциальности</u>
              </Link>
            </p>
          </label>
        </div>
        <button className="py-3 px-6 md:py-6 md:px-10 text-black font-semibold bg-white rounded-lg hover:text-white hover:border-white border-2 hover:bg-[#63b700] transition-colors duration-300">
          Оставить заявку
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
