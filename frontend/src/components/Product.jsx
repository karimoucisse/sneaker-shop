import styled from "styled-components"

const Container = styled.div`
    /* flex: 1; */
    margin: 10px 20px 35px 0;
    width: 320px;
    height: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    /* position: relative; */
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    cursor: pointer;
    border-radius: 10px;
    &:hover {
        transform: scale(1.007);
    }
`
const Image = styled.img`
    border-radius: 10px 10px 0 0;
    width: 100%;
    height: 250px;
    object-fit: cover;
`
const Desc = styled.div`
    background-color: #1c2930;
    color: #ffff;
    width: 100%;
    padding: 5px 20px;
    display: flex;
    justify-content: space-between;
`

const Title = styled.h3`

`
const Paragraph = styled.p`
    font-weight: 600;
    /* color: #525151; */
`
const Product = ({product}) => {
    console.log('prod:' + product.types[0].Image);
  return (
    <Container>
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