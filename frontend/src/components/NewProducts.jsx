import { useEffect, useState } from "react"
import styled from "styled-components"
import Product from "./Product"


const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
`
const Title = styled.h2`
    margin: 20px 0 10px 40px;
`
const Box = styled.div`
    padding: 20px 40px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 720px) {
        justify-content: center;
    }
`
const NewProducts = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts()
    }, [products])

    const getProducts = async () => {
        const response = await fetch(`https://sneaker-shop-fr.herokuapp.com/products?new=true`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setProducts(data)
    }
    if(!products) {
        return null
    }

  return (
    <Container>
        <Title>Nouveautés</Title>
        <Box>
            {products.map(product => (
                <Product product = {product}/>
            ))}
        </Box>
    </Container>
  )
}

export default NewProducts