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
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  /* grid-template-rows: repeat(1, 1fr); */
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 730px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`
const NewProducts = () => {
    const [products, setProducts] = useState()

    useEffect(() => {
        getProducts()
    }, [])

    const getProducts = async () => {
        const response = await fetch(`http://localhost:5000/products?new=true`, {
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
            {products.map((product, index) => (
                <Product product = {product} key= {index}/>
            ))}
        </Box>
    </Container>
  )
}

export default NewProducts