import React from 'react';
import './index.css';
import Home from './pages/Home';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';
import MainLayout from './layout/MainLayout';
import Aksiya from './pages/Aksiya';
import Kontakt from './pages/Kontakt';
import Narxlarjadvali from './pages/Narxlarjadvali';
import Certifikat from './pages/Certifikat';
import Okompany from './pages/Okompany';
import PlastikOynalar from './pages/PlastikOynalar';
import YagonaPanjaraliOyna from './pages/YagonaPanjaraliOyna';
import IkkiQavatliOyna from './pages/IkkiQavatliOyna';
import UchOsilganDeraza from './pages/UchOsilganDeraza';
import UchOsilganDeraza1 from './pages/UchOsilganDeraza1';
import DerazaBilan from './pages/DerazaBilan';
import EgriOynalar from './pages/EgriOynalar';
import PremiumOynalar from './pages/PremiumOynalar';
import Profillar from './pages/Profillar';
import YagonaPanjaraliOyna1 from './pages/YagonaPanjaraliOyna1';
import IkkiQavatliOyna1 from './pages/IkkiQavatliOyna1';
import BalkonVaLojikalar from './pages/BalkonVaLojikalar';
import YagonaPanjaraliOyna3 from './pages/YagonaPanjaraliOyna3';
import IkkiQavatliOyna3 from './pages/IkkiQavatliOyna3';
import UchOsilganDeraza3 from './pages/UchOsilganDeraza3';
import DerazaBilan3 from './pages/DerazaBilan3';
import EgriOynalar3 from './pages/EgriOynalar3';
import PremiumOynalar3 from './pages/PremiumOynalar3';
import ObektlarVaXizmatKorsatish from './pages/Ob\'ektlarVaXizmatKo\'rsatish';
import YagonaPanjaraliOyna4 from './pages/YagonaPanjaraliOyna4';
import IkkiQavatliOyna4 from './pages/IkkiQavatliOyna4';
import UchOsilganDeraza4 from './pages/UchOsilganDeraza4';
import DerazaBilan4 from './pages/DerazaBilan4';
import EgriOynalar4 from './pages/EgriOynalar4';
import TolovShartlari from './pages/TolovShartlari';
import YetkazibBerish from './pages/YetkazibBerish';
import TolovUsullari from './pages/TolovUsullari';
import Kamanda from './pages/Kamanda';
import BizHaqimizda from './pages/Bizhaqimizda';
import Yangiliklar from './pages/Yangiliklar';
import Ustaxonalar from './pages/Ustaxonalar';
import KompaniyaYangiliklari from './pages/KompaniyaYangiliklari';
import TashrifBuyuruvchilar from './pages/TashrifBuyuruvchilar';
import Registratsiya from './pages/Registratsiya';
import Ruxsatbolimi from './pages/Ruxsatbolimi';
import FoydalanishShartlari from './pages/FoydalanishShartlari';
import Xizmatkorsatish from './pages/Xizmatkorsatish';
import Texnikyordam from './pages/Texnikyordam';
import Shartnomalar from './pages/Shartnomalar';
import Savdoboyicha from './pages/Savdoboyicha';
import Brand from './pages/Brand';
import Tashabbus from './pages/Tashabbus';
import Media from './pages/Media';
import Banner from './pages/Banner';
import MalumotYigish from './pages/MalumotYigish';
import BloguchunMaqola from './pages/BloguchunMaqola';

const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='aksiya' element={<Aksiya />} />
        <Route path='narxlar' element={<Narxlarjadvali />} />
        <Route path='okompany' element={<Okompany />} />
        <Route path='PlastikOynalar' element={<PlastikOynalar />} />
        <Route path='YagonaPanjaraliOyna' element={<YagonaPanjaraliOyna />} />
        <Route path='YagonaPanjaraliOyna1' element={<YagonaPanjaraliOyna1 />} />
        <Route path='YagonaPanjaraliOyna3' element={<YagonaPanjaraliOyna3 />} />
        <Route path='YagonaPanjaraliOyna4' element={<YagonaPanjaraliOyna4 />} />
        <Route path='IkkiQavatliOyna' element={<IkkiQavatliOyna />} />
        <Route path='IkkiQavatliOyna1' element={<IkkiQavatliOyna1 />} />
        <Route path='IkkiQavatliOyna3' element={<IkkiQavatliOyna3 />} />
        <Route path='IkkiQavatliOyna4' element={<IkkiQavatliOyna4 />} />
        <Route path='UchOsilganDeraza' element={<UchOsilganDeraza />} />
        <Route path='UchOsilganDeraza1' element={<UchOsilganDeraza1 />} />
        <Route path='UchOsilganDeraza3' element={<UchOsilganDeraza3 />} />
        <Route path='UchOsilganDeraza4' element={<UchOsilganDeraza4 />} />
        <Route path='DerazaBilan' element={<DerazaBilan />} />
        <Route path='DerazaBilan3' element={<DerazaBilan3 />} />
        <Route path='DerazaBilan4' element={<DerazaBilan4 />} />
        <Route path='EgriOynalar' element={<EgriOynalar />} />
        <Route path='EgriOynalar3' element={<EgriOynalar3 />} />
        <Route path='EgriOynalar4' element={<EgriOynalar4 />} />
        <Route path='PremiumOynalar' element={<PremiumOynalar />} />
        <Route path='PremiumOynalar3' element={<PremiumOynalar3 />} />
        <Route path='Profillar' element={<Profillar />} />
        <Route path='BalkonVaLojiklar' element={<BalkonVaLojikalar />} />
        <Route path='ObektlarVaXizmatKorsatish' element={<ObektlarVaXizmatKorsatish />} />
        <Route path='TolovShartlari' element={<TolovShartlari />} />
        <Route path='YetkazibBerish' element={<YetkazibBerish />} />
        <Route path='TolovUsullari' element={<TolovUsullari />} />
        <Route path='Kamanda' element={<Kamanda />} />
        <Route path='Bizhaqimizda' element={<BizHaqimizda/>}/>
        <Route path='kontakt' element={<Kontakt />} />
        <Route path='yangiliklar' element={<Yangiliklar/>}/>
        <Route path='kompaniyayangiliklari' element={<KompaniyaYangiliklari/>}/>
        <Route path='tashrifbuyuruvchilar' element={<TashrifBuyuruvchilar/>}/>
        <Route path='registratsiya' element={<Registratsiya/>}/>
        <Route path='ruxsatbolimi' element={<Ruxsatbolimi/>}/>
        <Route path='foydalanishshartlari' element={<FoydalanishShartlari/>}/>
        <Route path='xizmatkorsatish' element={<Xizmatkorsatish/>}/>
        <Route path='texnikyordam' element={<Texnikyordam/>}/>
        <Route path='shartnomalar' element={<Shartnomalar/>}/>
        <Route path='savdoboyicha' element={<Savdoboyicha/>}/>
        <Route path='brand' element={<Brand/>}/>
        <Route path='tashabbus' element={<Tashabbus/>}/>
        <Route path='media' element={<Media/>}/>
        <Route path='banner' element={<Banner/>}/>
        <Route path='malumotyigish' element={<MalumotYigish/>}/>
        <Route path='bloguchunmaqola' element={<BloguchunMaqola/>}/>
        <Route path='certifikat' element={<Certifikat />} />
        <Route path='ustaxonalar' element={<Ustaxonalar/>}/>
      </Route>







    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
