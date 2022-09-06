import { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { UserContext } from "../context/User";
import { CartContext } from "../context/Cart";

const Container = styled.div`
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    @media (max-width: 770px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
   
`
const Paragraph = styled.div`
    padding: 10px 40px;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    font-weight: 600;
    font-size: 20px;
    &:hover {
        background-color: #212A2F;
        color: #ffff;
    }
    &:nth-child(${(props) => props.number}) {
        background-color: #212A2F;
        color: white;
    }
    @media (max-width: 770px) {
        display: flex;
        align-items: center;
        width: 300px;
        text-align: center;
    } 
`
const AccountNav = ({setNavNumber}) => {
    const [number, setNumber] = useState(1)
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const {setCart} = useContext(CartContext)

    useEffect(() => {
        setNavNumber(number)
    }, [number])

    const logout = async () => {
        const response = await fetch ('http://localhost:5000/auth/logout', {
            method:'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
            
            credentials: 'include'
        })
        setUser(null)
        setCart(null)
        navigate('/')
    }
    const onParagraphClick = (number) =>{
        setNumber(number)
        if(number == 6) {
            logout()
        }
    }
  return (
    <Container>
        <Paragraph onClick={() => onParagraphClick(1)} number= {number}>Information personnel</Paragraph>
        <Paragraph onClick={() => onParagraphClick(2)} number= {number}>Commande</Paragraph>
        <Paragraph onClick={() => onParagraphClick(3)} number= {number}>Vos paiment</Paragraph>
        <Paragraph onClick={() => onParagraphClick(4)} number= {number}>Nous Contacter</Paragraph>
        <Paragraph onClick={() => onParagraphClick(5)} number= {number}>Application mobile</Paragraph>
        <Paragraph onClick={() => onParagraphClick(6)}  number= {number}>Deconexion</Paragraph>
    </Container>
  )
}

export default AccountNav