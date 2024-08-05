import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AOS from 'aos';
import axios from "axios";

const Aniqxisob = () => {

  // Telegram bot
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const [checkboxError, setCheckboxError] = useState(false); // New state for checkbox error
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
    }  else {
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

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div data-aos="fade-up" className="w-full max-w-base mx-auto py-20 px-5">

      <div className="bg-[#63b700] p-10 rounded-lg space-y-2 flex flex-col lg:flex-row lg:justify-between  items-center gap-6">
        <div>
          <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-2 sm:mb-3 text-white">Хотите получить точный расчет?</h3>
          <p className="text-white/70 text-lg">Оставьте заявку и мы перезвоним в течение 10 минут и рассчитаем Ваш заказ</p>
        </div>
        <div>
          <form onSubmit={handleSubmitInput} className="space-y-5" action="#">
            <input onChange={handleName}
              value={name}
              required className="bg-transparent placeholder-white w-full border-b text-white border-white focus:outline-none pb-5" type="text" placeholder="Ваше имя" />
            <input onChange={handlePhone}
              value={phone}
              required className="bg-transparent placeholder-white w-full border-b text-white border-white focus:outline-none pb-5" type="tel" placeholder="+7 (000) 090-99-99" />

            <div className=' justify-center flex-col sm:flex-row flex mt-5'>
              <div className="flex justify-between items-start space-x-4  sm:mb-0 mb-5">
                <label className="flex items-start space-x-2">
                  <input type="checkbox"
                    id="privacy"
                    checked={isCheckboxChecked}
                    onChange={handleCheckboxChange} className="form-checkbox h-10 w-10 bg-black border-gray-300 rounded  cursor-pointer" />
                  <p className="opacity-60 text-white">
                    Я согласен(а) с обработкой персональных данных и{' '}
                    <Link to="/foydalanishshartlari" target="_blank"><u>политикой конфиденциальности</u></Link>
                  </p>
                  {checkboxError && <p className="text-red-500 text-sm">Пожалуйста, подтвердите согласие</p>}
                </label>
              </div>
              <button type='submit' className="py-6 px-4 max-w-52 w-full text-black font-semibold bg-white rounded-md hover:text-white hover:border-white border-2 hover:bg-[#63b700] transition-colors duration-300">
                Оставить заявку
              </button>
            </div>
          </form>

        </div>
      </div>

    </div>
  )
}

export default Aniqxisob
