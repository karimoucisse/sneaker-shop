import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import NewProducts from '../components/NewProducts'
import Homeinformation from '../components/Homeinformation'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Slider/>
        <NewProducts/>
        <Homeinformation/>
        <Footer/>
    </div>
  )
}

export default Home