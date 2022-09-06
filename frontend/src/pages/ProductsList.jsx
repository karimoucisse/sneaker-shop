import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Products from "../components/Products"
import Loading from "../components/Loading"


const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    @media (max-width: 371px) {
        flex-direction: column;
    }
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
    const {genre} = useParams()
    
    useEffect(() => {
        getProducts()
    }, [genre])

    const getProducts = async () => {
        const response = await fetch(`http://localhost:5000/products?category=${genre}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setProducts(data)
    }
    if(!products) {
        return <Loading/>
    }

  return (
    <div>
        <Navbar/>
        {genre === "Man" && <Title>Homme</Title>}
        {genre === "Woman" && <Title>Femme</Title>}
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
    </div>
  )
}

export default ProductsList