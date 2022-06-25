import styled from "styled-components"
import Product from "./Product"

const Container = styled.div`
  padding: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
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

const Products = ({products}) => {

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     console.log('This will run after 1 second!')
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

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