import { motion } from 'framer-motion'
import styled from "styled-components"
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AccountNav from '../components/AccountNav'
import UserInfo from '../components/UserInfo'

const Container = styled.div`
    display: flex;
    min-height: 70vh;
`
const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 700;
`

const Account = () => {
  return (
    <motion.div
        style={{backgroundColor: "#F1EBE7"}}
    >
        <Navbar/>
        <Title>Mon compte</Title>
        <Container>
            <AccountNav/>
            <UserInfo/>
        </Container>
        <Footer/>
    </motion.div>
  )
}

export default Account