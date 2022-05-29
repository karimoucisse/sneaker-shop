import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import { motion } from 'framer-motion'
const Home = () => {
  return (
    <motion.div
      initial= {{ width: 0 }}
      animate= {{ width: "100%" }}
      exit= {{ x: window.innerWidth, transition: {duration: 0.3} }}
    >
        <Navbar/>
        <Slider/>
        <Footer/>
    </motion.div>
  )
}

export default Home