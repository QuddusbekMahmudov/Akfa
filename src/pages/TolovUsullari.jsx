import React from 'react'
import { Link } from 'react-router-dom'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import PageWrapper from '../Components/PageWrapper';

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

const TolovUsullari = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <PageWrapper>
      <div className="w-full max-w-base mx-auto px-5 py-10 sm:py-20">
        <h2 className='mb-10 opacity-60'>
          <Link to='/' className='text-[#79c701]'>Главная/</Link> <Link to={'/TolovShartlari'} className='text-[#79c701]'>Условия оплаты/</Link>Способы оплаты
        </h2>
        <h1 className='text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-16'>Способы оплаты</h1>

        <Accordion open={open === 1} icon={<Icon id={1} open={open} />} className='border-y-2 border-black'>
          <AccordionHeader onClick={() => handleOpen(1)} className='opacity-60 text-3xl font-bold '>Далеко-далеко за словесными горами</AccordionHeader>
          <AccordionBody className='opacity-60 text-xl leading-10'>
            Вдали от всех живут они в буквенных домах на берегу Семантика большого языкового океана. Маленький ручеек Даль журчит по всей стране и обеспечивает ее всеми необходимыми правилами.
          </AccordionBody>
        </Accordion>
        <Accordion open={open === 2} icon={<Icon id={2} open={open} />} className='border-b-2 border-black'>
          <AccordionHeader onClick={() => handleOpen(2)} className='opacity-60 text-3xl font-bold'>
            Великий Оксмокс
          </AccordionHeader>
          <AccordionBody  className='opacity-60 text-xl leading-10'>
            Предупреждал ее о злых запятых, диких знаках вопроса и коварных точках с запятой, но текст не дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал инициал за пояс и пустился в дорогу.
          </AccordionBody>
        </Accordion>
      </div>
    </PageWrapper>
  )
}

export default TolovUsullari
