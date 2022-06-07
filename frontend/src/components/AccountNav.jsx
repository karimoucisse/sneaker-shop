import { useEffect, useState } from "react";
import styled from "styled-components"
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { UserContext } from "../context/User";

const Container = styled.div`
    /* flex: 1; */
    padding: 20px 0;
    /* width: 300px; */
    /* height: 70vh; */
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
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
        transform: scale(1.01);
        background-color: ${(props) => props.number === 6 ? 'red' : '#212A2F'};
        color: #ffff;
    }
    &:nth-child(${(props) => props.number}) {
        background-color: ${(props) => props.number == 6 ? 'red !important' : '#212A2F'};
        color: white;
    }
    @media (max-width: 770px) {
        /* max-height: 70px; */
        display: flex;
        align-items: center;
        /* padding: 20px 0px; */
        width: 300px;
        /* flex: 1; */
        text-align: center;
    }
`
const AccountNav = ({setNavNumber}) => {
    const [number, setNumber] = useState(1)
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)

    useEffect(() => {
        setNavNumber(number)
    }, [number])

    const logout = async () => {
        const response = await fetch ('https://sneaker-shop-fr.herokuapp.com/auth/logout', {
            method:'DELETE',
            headers: {
                'Content-Type':'application/json',
            },
            
            credentials: 'include'
            // body: JSON.stringify(values)
        })
        setUser(null)
        navigate('/')
    }
    const onParagraphClick = (number) =>{
        setNumber(number)
        if(number === 6) {
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