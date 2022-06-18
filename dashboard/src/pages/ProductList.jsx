import {useContext} from "react"
import { ProductContext } from "../context/Product"
import styled from "styled-components"
import Product from "../components/Product"
import SideBar from "../components/SideBar"
import Navbar from "../components/Navbar"

const Page = styled.div`
    display: flex;
`

const Container = styled.div`
  flex: 4;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 24px;
`




const ProductList = () => {
  const {product} = useContext(ProductContext)
    

    if(!product) {
        return null
    }

  return (
    <>
      <Navbar/>
      <Page>
        <SideBar/>
        <Container>
            {product.map(item => (
              item.types.map(type => (
                <Product item= {type} product= {item}/>
              ))
            ))} 
        </Container>
      </Page>
    </>
  )
}

export default ProductList