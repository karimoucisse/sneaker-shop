import styled from "styled-components"
import BasketItems from "../components/BasketItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"

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
    <Container>
        <Navbar/>
        <Title>Panier</Title>
        <Left>
            <BasketItems/>
            <BasketItems/>
            <BasketItems/>
        </Left>
        <Footer/>
    </Container>
  )
}

export default Basket