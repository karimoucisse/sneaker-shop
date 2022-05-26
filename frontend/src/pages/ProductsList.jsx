import { useEffect, useState } from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"

const Container = styled.div`

`
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`
const Filter = styled.div`
    margin: 20px;
`
const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
`
const Select = styled.select`
    padding: 8px;
    font-size: 18px;
    cursor: pointer;
    outline: none;
    border: 0.5px solid ;
`
const Option = styled.option`
    font-size: 18px;
`
const ProductsList = () => {
    const [products, setProducts] = useState()
    
    useEffect(() => {
        getProducts()
        // console.log('proddd: ' + products);
    }, [])

    const getProducts = async () => {
        const response = await fetch(`http://localhost:5000/products?category=Man`, {
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
        <Navbar/>
        <Title>MAN</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter brands: </FilterText>
                <Select>
                    <Option>All</Option>
                    <Option>Nike</Option>
                    <Option>Adidas</Option>
                    <Option>Jordan</Option>
                    <Option>Asics</Option>
                </Select>
            </Filter>
            <Filter>
                <FilterText>Sort Products: </FilterText>
                <Select>
                    <Option>Les plus récents</Option>
                    <Option>Prix: décroissant</Option>
                    <Option>Prix: croissant</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products products= {products}/>
        <Footer/>
    </Container>
  )
}

export default ProductsList