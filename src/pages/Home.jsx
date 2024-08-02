import React from 'react'
import HomeHero from '../Components/HomeHero'
import Turlixilakfaromlar from '../Components/Turlixilakfaromlar'
import Foto from '../Components/Foto'
import TabsComponent from '../Components/TabsComponent'
import Aksiyalar from '../Components/Aksiyalar'
import Yaxshixizmat from '../Components/Yaxshixizmat'
import Aniqxisob from '../Components/Aniqxisob'
import IshJarayoni from '../Components/IshJarayoni'
import DerazalarniTamirlash from '../Components/DearazalarniTamirlsh'
import FoydaliMalumotlar from '../Components/FoydaliMalumotlar'
import Haqqoniyfikrlar from '../Components/HaqqoniyFikrlar'
import Tashkiletilgansana from '../Components/Tashkiletilgansana'

const Home = () => {
  return (
    <>
        <HomeHero />
        <Turlixilakfaromlar />
        <TabsComponent/>
        <Aksiyalar/>
        <Yaxshixizmat/>
        <Aniqxisob/>
        <IshJarayoni/>
        <Foto />
        <DerazalarniTamirlash/>
        <FoydaliMalumotlar/>
        <Haqqoniyfikrlar/>
        <Tashkiletilgansana/>
        

    </>
  )
}

export default Home
