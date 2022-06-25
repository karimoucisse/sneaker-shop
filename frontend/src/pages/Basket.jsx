import styled from "styled-components"
import BasketItems from "../components/BasketItems"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { motion } from 'framer-motion'
import { useContext, useEffect } from "react"
import { CartContext } from "../context/Cart"
import TotalCard from "../components/TotalCard"
import Loading from "../components/Loading"



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
const EmptyTitle = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 30px;
    font-weight: 300;
    width: 100%;
`
const Basket = () => {
    const {products, setProducts, cart} = useContext(CartContext)
    // const [products, setProducts] = useState() ;

    useEffect(() => {
        if(!cart) {
            setProducts(JSON.parse(localStorage.getItem('products')))
        } 
    }, [cart, setProducts])

    // if(!cart) {
    //    return <Loading/>
    // }
    // if(!products) {
    //    return <Loading/>
    // }

  return (
    <motion.div
        style={{ backgroundColor: "#FAF9F8"}}
        initial= {{ width: 0 }}
        animate= {{ width: "100%" }}
        exit= {{ x: window.innerWidth, transition: {duration: 0.3} }}
    >
        <Navbar/>
        <Title>Panier</Title>
        <Container>
            {products && products.length > 0 && 
                <>
                    <Left>
                        {products.map((item, index) => 
                            <BasketItems item = {item} index= {index} /> 
                        )}
                    </Left>
                    <TotalCard />
                </>
            }

            {cart === null && !products && 
                <EmptyTitle>Il n'y a pas d'article dans votre panier</EmptyTitle>
            }

            {cart && cart.products.length > 0 &&
                <>
                    <Left>
                        {cart.products.map((item, index) => 
                            <BasketItems item = {item} index= {index} /> 
                        )}
                    </Left>
                    <TotalCard/>
                </>
            }
            {cart && cart.products.length === 0 && 
                <EmptyTitle>Il n'y a pas d'article dans votre panier</EmptyTitle>
            }
        </Container>
        <Footer/>
    </motion.div>
  )
}

export default Basket