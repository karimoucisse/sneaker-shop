import styled from "styled-components"
import Product from "./Product"

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 40px;
`

const Products = ({products}) => {
    // console.log("peoducts: " + products);
  return (
    <Container>
        {products.map(product => (
            <Product product={product} key= {product._id}/>
        ))}
    </Container>
  )
}

export default Products