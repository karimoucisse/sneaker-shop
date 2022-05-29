import styled from "styled-components"
import BasketItems from "../components/BasketItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { motion } from 'framer-motion'

const Container = styled.div`
    background-color: #FAF9F8;
`
const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
`
const Left = styled.div`
    padding: 60px 50px;
`
const Basket = () => {
  return (
    <motion.div
        style={{ backgroundColor: "#FAF9F8" }}
        initial= {{ width: 0 }}
        animate= {{ width: "100%" }}
        exit= {{ x: window.innerWidth, transition: {duration: 0.3} }}
    >
        <Navbar/>
        <Title>Panier</Title>
        <Left>
            <BasketItems/>
            <BasketItems/>
            <BasketItems/>
        </Left>
        <Footer/>
    </motion.div>
  )
}

export default Basket