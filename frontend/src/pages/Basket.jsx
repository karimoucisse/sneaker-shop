import styled from "styled-components"
import BasketItems from "../components/BasketItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useContext, useEffect } from "react"
import { CartContext } from "../context/Cart"
import TotalCard from "../components/TotalCard"
import { useNavigate } from "react-router-dom"



const Title = styled.h1`
    text-align: center;
    margin-top: 20px;
    letter-spacing: 2px;
    font-size: 35px;
    font-weight: 700;
`
const Container = styled.div`
    display: flex;
    padding: 60px 50px;
    min-height: 70vh;
    @media (max-width: 870px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 500px) {
        padding: 60px 10px;
    }
`
const Left = styled.div`
    flex: 1;
    @media (max-width: 870px) {
        width: 100%;
    }
`
const EmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 25px;
`
const EmptyTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 300;
    width: 100%;
`
const Button = styled.button`
    padding: 10px 20px;
    color: white;
    background-color: rgb(33,42,47);
    border: 1px solid darkblue;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all ease-in .2s;
    &:hover {
        background-color: white;
        color: rgb(33,42,47);
    }
`

const Basket = () => {
    const {products, setProducts, cart} = useContext(CartContext)
    const navigate = useNavigate()

    useEffect(() => {
        if(!cart) {
            setProducts(JSON.parse(localStorage.getItem('products')))
        } 
    }, [cart, setProducts])

  return (
    <div>
        <Navbar/>
        <Title>Panier</Title>
        <Container>
            {products && products.length > 0 && 
                <>
                    <Left>
                        {products.map((item, index) => 
                            <BasketItems item = {item} index= {index} key = {index} /> 
                        )}
                    </Left>
                    <TotalCard />
                </>
            }

            {!cart && !products && 
                <EmptyContainer>
                    <EmptyTitle>Il n'y a pas d'article dans votre panier</EmptyTitle>
                    <Button  onClick={() => navigate('/')}>Go shopping</Button>
                </EmptyContainer>
            }

            {cart && cart.products.length > 0 &&
                <>
                    <Left>
                        {cart.products.map((item, index) => 
                            <BasketItems item = {item} index= {index} key= {index}/> 
                        )}
                    </Left>
                    <TotalCard/>
                </>
            }
            {cart && cart.products.length === 0 && 
                <EmptyContainer>
                    <EmptyTitle>Il n'y a pas d'article dans votre panier</EmptyTitle>
                    <Button  onClick={() => navigate('/')}>Go shopping</Button>
                </EmptyContainer>
            }
        </Container>
        <Footer/>
    </div>
  )
}

export default Basket