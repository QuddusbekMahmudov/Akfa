import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';

const Aniqxisob = () => {

  useEffect(() => {
    AOS.init({ duration: 1500 }); 
}, []);

  return (
    <div  data-aos="fade-up"  className="w-full max-w-base mx-auto py-20 px-5">

      <div className="bg-[#63b700] p-10 rounded-lg space-y-2 flex flex-col lg:flex-row lg:justify-between  items-center gap-6">
        <div>
        <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">Хотите получить точный расчет?</h3>
        <p className="text-white/70 text-lg">Оставьте заявку и мы перезвоним в течение 10 минут и рассчитаем Ваш заказ</p>
        </div>
       <div>
       <form className="space-y-5" action="#">
          <input className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5" type="text" placeholder="Ваше имя" />
          <input className="bg-transparent placeholder-white w-full border-b border-white focus:outline-none pb-5" type="tel" placeholder="+7 (000) 090-99-99" />
        </form>

       <div className=' justify-center flex-col sm:flex-row flex mt-5'>
       <div className="flex justify-between items-start space-x-4  sm:mb-0 mb-5">
       <label className="flex items-start space-x-2">
            <input type="checkbox" className="form-checkbox h-10 w-10 bg-black border-gray-300 rounded  cursor-pointer" />
            <p className="opacity-60 text-white">
              Я согласен(а) с обработкой персональных данных и{' '}
              <Link to="/foydalanishshartlari" target="_blank"><u>политикой конфиденциальности</u></Link>
            </p>
         </label>
        </div>
        <button className="py-6 px-4 max-w-52 w-full text-black font-semibold bg-white rounded-md hover:text-white hover:border-white border-2 hover:bg-[#63b700] transition-colors duration-300">
          Оставить заявку
        </button>
       </div>

       </div>
      </div>
      
    </div>
  )
}

export default Aniqxisob
