import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
    min-width: 100px;
    box-shadow: 4px 4px 4px rgba(232, 227, 227, 0.7);
    cursor: pointer;
    transition: all 0.2s;
    &:hover {
        transform: scale(1.01);
    }
`
const Image = styled.img`
    width: 100%;
    height: 70%;
    object-fit: cover;
    cursor: pointer;
`
const Desc = styled.div`
    padding: 20px;
    height: 30%;
    background-color: darkblue;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 15px;
`
const Product = ({item, product}) => {

    return (
    <Container>
        <Image src= {item.image}/>

        <Desc>
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
        </Desc>
    </Container>
  )
}

export default Product