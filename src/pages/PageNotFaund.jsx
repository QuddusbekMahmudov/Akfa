import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // 3 секунды после перенаправление на главную страницу
    const timer = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Страница не найдена</p>
        <p className="mt-4 text-gray-500">Вы будете перенаправлены на главную страницу через несколько секунд...</p>
      </div>
    </div>
  );
};

export default PageNotFound;
