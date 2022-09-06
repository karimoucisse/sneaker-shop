import styled from "styled-components"
import Product from "./Product"

const Container = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  @media (max-width: 1144px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
  @media (max-width: 597px) {
    grid-template-columns: repeat(1, 1fr);
    /* grid-template-rows: repeat(2, 1fr); */
  }
`

const Products = ({products}) => {

  return (
    <Container>
        {products.map(product => (
            <Product product={product} key= {product._id}/>
        ))}
    </Container>
  )
}

export default Products