import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import { motion } from 'framer-motion'
import NewProducts from '../components/NewProducts'
import Homeinformation from '../components/Homeinformation'
const Home = () => {
  return (
    <motion.div
      initial= {{ width: 0 }}
      animate= {{ width: "100%" }}
      exit= {{ x: window.innerWidth, transition: {duration: 0.3} }}
    >
        <Navbar/>
        <Slider/>
        {/* <NewProducts/> */}
        <Homeinformation/>
        <Footer/>
    </motion.div>
  )
}

export default Home