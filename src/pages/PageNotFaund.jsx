import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate(); // To'g'ri nomlash: 'navigate' o'rnatildi

  useEffect(() => {
    // 3 soniyadan keyin asosiy sahifaga qaytarish
    const timer = setTimeout(() => {
      navigate('/'); // 'history.push' o'rniga 'navigate' funksiyasidan foydalanamiz
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]); // 'history' o'rniga 'navigate'

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl text-gray-600">Page Not Found</p>
        <p className="mt-4 text-gray-500">You will be redirected to the homepage in a few seconds...</p>
      </div>
    </div>
  );
};

export default PageNotFound;
