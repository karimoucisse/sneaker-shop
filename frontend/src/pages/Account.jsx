import { motion } from 'framer-motion'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AccountNav from '../components/AccountNav'
import UserInfo from '../components/UserInfo'
import Order from '../components/Order'
import { useState } from 'react'

const Container = styled.div`
    display: flex;
    min-height: 70vh;
    @media (max-width: 770px) {
        flex-direction: column;
    }
`
const Title = styled.h1`
    text-align: center;
    margin: 40px 0px;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 700;
`

const Account = () => {
    const [navNumber, setNavNumber] = useState()
  return (
    <motion.div
        style={{backgroundColor: "#F1EBE7"}}
    >
        <Navbar/>
        <Title>Mon compte</Title>
        <Container>
            <AccountNav setNavNumber = {setNavNumber } navNumber= {navNumber} />
            {navNumber === 1 && <UserInfo/>}
            {navNumber === 2 && <Order/>}
        </Container>
        <Footer/>
    </motion.div>
  )
}

export default Account