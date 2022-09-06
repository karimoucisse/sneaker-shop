import styled from "styled-components"
import { Link } from 'react-router-dom';

const Container = styled(Link)`
    min-width: 100px;
    box-shadow: 4px 4px 4px rgba(232, 227, 227, 0.7);
    background-color: rgb(246,246,246);
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.01);
    }
    
`
const Image = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 240px;
    object-fit: cover;
`
const Desc = styled.div`
    background-color: #1c2930;
    color: #ffff;
    width: 100%;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h3`

`
const Paragraph = styled.p`
    font-weight: 600;
`
const Product = ({product}) => {

  return (
    <Container to = {`/product/${product._id}`}>
        <Image src= {product.types[0].image} />
        <Desc>
            <div>
                <Title>{product.name}</Title>
                <Paragraph>{product.brand}</Paragraph>
                <Paragraph>{product.types.length} couleurs</Paragraph>
            </div>
            <div>
                <Paragraph>{product.price}€</Paragraph> 
            </div>
        </Desc>
    </Container>
  )
}

export default Product