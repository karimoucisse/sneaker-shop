import styled from "styled-components"
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useContext, useEffect, useState } from "react"
import { CartContext } from "../context/Cart"
import Loading from "./Loading";

const Container = styled.div`
    max-width: 600px;
    height: 130px;
    /* border: 2px solid; */
    display: flex;
    background-color: #ffff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 8px;
    margin-bottom: 20px;
    border-radius: 5px;
`
const Left = styled.div`
    flex: 1;
    /* width: 200px; */
    height: 100%;
`
const Image = styled.img`
    height: inherit;
    object-fit: cover;
    width: 100%;
`
const Right = styled.div`
    flex: 2;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
const Top = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 5px 0 14px;
`
const DeleteContainer = styled(DeleteOutlineOutlinedIcon)`
    cursor: pointer;
    &:hover {
        transform: scale(1.02);
        color: #2f2525;
    }
`
const Title = styled.h3`
    margin-bottom: 10px;
    font-weight: 500;
`
const Paragraph = styled.p`
    font-weight: 300;
    font-size: 16px;
    margin-bottom: 5px;
`

const BasketItems = ({item, index}) => {
    const {cart, modifyCart, products} = useContext(CartContext)

    useEffect(() => {
        console.log("item: " + item);
    }, [])

    const onDeleteClick = () => {
        if(products) {
            if(products.length > 1) {
                // let products = JSON.parse(localStorage.getItem('products'))
                products.splice(index, 1)
                console.log(products);
                // localStorage.removeItem('products')
                localStorage.setItem('products', JSON.stringify(products))
            } else {
                localStorage.removeItem('products')
            }
        }
        if(cart) {
            const cartProducts = cart.products
            cartProducts.splice(index, 1)
            modifyCart(cart._id, cartProducts);
        }
    }




    // if(!cart) {
    //     return <Loading/>
    // }
    // if(!item) {
    //     return null
    // }

  return (
    <Container>
        {products &&
        <>
            <Left>
                <Image src= {item.product.type.image} />
            </Left>
            <Right>
                <Top>
                    <div>
                        <Title>{item.product.name}</Title>
                        <Paragraph>Prix: {item.product.price}€</Paragraph>
                        <Paragraph>Couleur: {item.product.color}</Paragraph>
                        <Paragraph>Taille: {item.product.size}</Paragraph>
                    </div>
                    <DeleteContainer onClick={() => onDeleteClick()}/>
                </Top>
            </Right>
        </>
        }
        {cart && 
        <>
            <Left>
                <Image src= {item.product[0].type.image} />
            </Left>
            <Right>
                <Top>
                    <div>
                        <Title>{item.product[0].name}</Title>
                        <Paragraph>Prix: {item.product[0].price}€</Paragraph>
                        <Paragraph>Couleur: {item.product[0].type.color}</Paragraph>
                        <Paragraph>Taille: {item.product[0].size}cm</Paragraph>
                    </div>
                    <DeleteContainer onClick={() => onDeleteClick()}/>
                </Top>
            </Right>
        </>
        }
    </Container>
  )
}

export default BasketItems