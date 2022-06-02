import { useEffect, useState, useContext } from "react"
import styled from "styled-components"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion'
import { CartContext } from "../context/Cart"
import { UserContext } from "../context/User";


const Wrapper = styled.div`
    display: flex;
    padding: 40px;
`
const Left = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover ;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`
const Right = styled.div`
    flex: 1;
    padding: 0 50px;
`
const Title = styled.h1`
    font-weight: 300;
`
const Desc = styled.p`
    margin: 20px;
`
const Price = styled.span`
    /* font-weight: 100; */
    font-size: 30px;
`
const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0;
`
const Filter = styled.div`
    display: flex;
    flex-wrap: wrap;
`
const FilterTitle = styled.h2`
    font-weight: 200;
    font-size: 20px;
    width: 100%;
    margin-bottom: 10px;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 0.5px solid;
    margin: 0 10px 10px ;
    background-color: ${props => props.color};
    cursor: pointer;
    &:hover {
        transform: scale(1.04);
    }
`
const FilterSize = styled.div`
    /* margin: 20px; */
    border: 0.5px solid ;
    flex-wrap: wrap;
    font-weight: 400;
    padding: 10px 15px;
    margin: 0 10px 10px ;
    cursor: pointer;
    transition: all ease-in-out .2s;
    &:hover {
        background-color: #212a2f;
        color: white;
        /* border: none; */
        transition: all ease-in 0.2s;
        transform: scale(1.007);
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    }
    &:nth-child(${(props) => props.number}) {
        background-color: ${(props) => props.number && '#212A2F'};
        color: white;
    }
`

const Button = styled.button`
    /* width: 100%; */
    padding: 10px 20%;
    background-color: #212a2f;
    color: white;
    font-weight: 600;
    border: 1px solid #212a2f;
    transition: all .2s ease-in-out;
    /* border: none; */
    cursor: pointer;
    &:hover {
        background-color: white;
        color: black;
        /* transform: scale(1.001); */
    }
`

const Product = () => {
    const [product, setProduct] = useState()
    const [color, setColor] = useState(null)
    const [number, setNumber] = useState(2)
    const [typeNumber, setTypeNumber] = useState(0)
    const {id} = useParams()
    const {cart, setCart, modifyCart} = useContext(CartContext)
    const {user} = useContext(UserContext)

    useEffect(() => {
        getProduct()
    }, [])

    const getProduct = async () => {
        const response = await fetch(`http://localhost:5000/products/${id}`, {
            credentials: 'include',
        })
        
        const data = await response.json()
        setProduct(data)
    }
    
    const onColorClick = (color) => {
        setColor(color)
        for(let i = 0; i< product.types.length; i++ ) {
            if(product.types[i].color === color) {
                setTypeNumber(i)
            }
        }
    }
    
    const onAddBasketButtonClick = () => {
        let products = cart.products
        const content ={
            product : {
                name: product.name,
                price: product.price,
                size: product.size[number - 2],
                type: product.types[typeNumber],
            }
        }  
        products = [
            ...products,
            content
        ]
        modifyCart(cart._id, products)   
        console.log("add into cart");
    }

    const onSizeClick = (item) => {
        for(let i = 0; i < product.size.length; i++) {
            if(product.size[i] === item) {
                setNumber(i+2)
            }
        }
    }

    if(!product) {
        return null
    }
    
  return (
    <motion.div
        initial= {{ width: 0 }}
        animate= {{ width: "100%" }}
        exit= {{ x: window.innerWidth, transition: {duration: 0.3} }}
    >
        <Navbar/>
        <Wrapper>
            <Left>
                <Image src= {product.types[typeNumber].image} />
            </Left>
            <Right>
                <Title>{product.name}</Title>
                <Desc>
                    {product.description}
                </Desc>
                <Price>{product.price}€</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color</FilterTitle>
                        {product.types.map(type => (
                            <FilterColor color= {type.color} onClick= {() => onColorClick(type.color)}/>
                        ))}
                    </Filter>
                    <Filter>
                        <FilterTitle>Size</FilterTitle>
                        {product.size.map(item => {
                            return <FilterSize onClick={() => onSizeClick(item)} number = {number}>EU {item}</FilterSize> 
                            
                        })}
                    </Filter>
                </FilterContainer>
                <Button onClick={() => onAddBasketButtonClick ()}>Ajouter au panier</Button>
            </Right>
        </Wrapper>
        <Footer/>
    </motion.div>
  )
}

export default Product